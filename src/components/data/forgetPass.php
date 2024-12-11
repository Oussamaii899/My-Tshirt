<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json");

include "vendor/phpmailer/src/PHPMailer.php";
include "vendor/phpmailer/src/SMTP.php";
include "vendor/phpmailer/src/Exception.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


$con = new mysqli('127.0.0.1', 'root', '', 'myshrty');
if ($con->connect_error) {
    die(json_encode(["error" => "Échec de la connexion à la base de données : " . $con->connect_error]));
}


$data = json_decode(file_get_contents("php://input"), true);
if (!$data || !isset($data['action'])) {
    die(json_encode(["error" => "Action non spécifiée."]));
}

$action = $data['action'];


if ($action === 'request_reset') {
    if (!isset($data['email'])) {
        die(json_encode(["error" => "L'adresse e-mail est requise."]));
    }

    $email = $data['email'];

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die(json_encode(['status' => 'error', 'message' => 'Format d\'email invalide']));
    }


    $result = $con->query("SELECT id, username FROM USERS WHERE email = '$email'");
    if ($result->num_rows === 0) {
        die(json_encode(['status' => 'error', 'message' => 'Aucun utilisateur trouvé avec cet email.']));
    }

    $user = $result->fetch_assoc();
    $username = $user['username'];

    $reset_code = random_int(100000, 999999);
    
    $stmt = $con->prepare("UPDATE USERS SET resetCode = ? WHERE email = ?");
    $stmt->bind_param("ss", $reset_code, $email);
    $stmt->execute();

    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'myshrty@gmail.com';
        $mail->Password = 'sucmewjarqmepzzt'; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom('myshrty@gmail.com', 'MyT-Shirty');
        $mail->addAddress($email, $username);
        $mail->isHTML(true);

        $mail->Subject = 'Réinitialisation de mot de passe - MyT-Shirty';
        $mail->Body = '<p>Bonjour ' . htmlspecialchars($username) . ',</p>';
        $mail->Body .= '<p>Votre code de réinitialisation de mot de passe est : <b style="font-size: 20px;">' . $reset_code . '</b></p>';
        $mail->send();

        echo json_encode(['status' => 'success', 'message' => 'Un email de réinitialisation a été envoyé. Vérifiez votre boîte de réception.']);
    } catch (Exception $e) {
        echo json_encode(["error" => "Erreur lors de l'envoi de l'email : " . $mail->ErrorInfo]);
    }
}

elseif ($action === 'reset_password') {
    if (!isset($data['email'], $data['reset_code'], $data['new_password'])) {
        die(json_encode(["error" => "Email, code de réinitialisation et nouveau mot de passe requis."]));
    }

    $email = $data['email'];
    $reset_code = $data['reset_code'];
    $new_password = $data['new_password'];


    if (strlen($new_password) < 6) {
        die(json_encode(['status' => 'error', 'message' => 'Le mot de passe doit comporter au moins 6 caractères.']));
    }

    $stmt = $con->prepare("SELECT id FROM USERS WHERE email = ? AND resetCode = ?");
    $stmt->bind_param("ss", $email, $reset_code);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows === 0) {
        die(json_encode(['status' => 'error', 'message' => 'Code de réinitialisation incorrect ou email non valide.']));
    }

    $encrypted_password = $new_password; 
    $stmt = $con->prepare("UPDATE USERS SET password = ?, resetCode = NULL WHERE email = ?");
    $stmt->bind_param("ss", $encrypted_password, $email);
    $stmt->execute();

    echo json_encode(['status' => 'success', 'message' => 'Mot de passe mis à jour avec succès.']);
}

else {
    echo json_encode(["error" => "Action non reconnue."]);
}

?>