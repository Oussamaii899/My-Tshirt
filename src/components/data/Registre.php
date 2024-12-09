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

// Connexion à la base de données
$con = new mysqli('127.0.0.1', 'root', '', 'myshrty');
if ($con->connect_error) {
    die(json_encode(["error" => "Échec de la connexion à la base de données : " . $con->connect_error]));
}

// Récupération des données JSON
$data = json_decode(file_get_contents("php://input"), true);
if (!$data || !isset($data['username'], $data['email'], $data['password'])) {
    die(json_encode(["error" => "Données invalides."]));
}

$username = $data["username"];
$email = $data["email"];
$password = $data["password"];

$emailinvalid = 'Email Invalid';
$pwinvalid  = "Le mot de passe doit comporter au moins 6 caractères.";

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid email format']);   
}

if (strlen($password) < 6) {
    echo json_encode(['status' => 'error', 'message' => 'Password must be at least 6 characters']);
    exit();
}


$result = $con->query("SELECT id FROM USERS WHERE email = '$email'");
if ($result->num_rows > 0) {
    echo json_encode(['status' => 'error', 'message' => 'Email is already registered']);
    exit();
} 

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


    $verification_code = random_int(100000, 999999);
    $mail->Subject = 'Verification de votre adresse email - MyT-Shirty';
    $mail->Body = '<p>Bonjour ' . htmlspecialchars($username) . ',</p>';
    $mail->Body .= '<p>Votre code de vérification est : <b style="font-size: 20px;">' . $verification_code . '</b></p>';
    $mail->send();

    $encrypted_password = $password;
    $sql = "INSERT INTO USERS (id, username, email, password, verificationCode, emailVerifiedAt) 
            VALUES (NULL, ?, ?, ?, ?, NULL)";
    $stmt = $con->prepare($sql);
    $stmt->bind_param("ssss", $username, $email, $encrypted_password, $verification_code);
    $stmt->execute();

    echo json_encode(['status' => 'success','message' => 'Utilisateur enregistré avec succès. Vérifiez votre email.']);
} catch (Exception $e) {
    echo json_encode(["error" => "Erreur lors de l'envoi de l'email : " . $mail->ErrorInfo]);
}
?>
