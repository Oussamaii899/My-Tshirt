<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json");
header("Access-Control-Allow-Credentials: true");


    $con = new mysqli('127.0.0.1', 'root', '', 'myshrty');

    $data = json_decode(file_get_contents("php://input"), true);
    if (!$data || !isset($data['email'] ,$data['verification_code'])) {
        die(json_encode(["error" => "Données invalides."]));
    }

    $email = trim($data["email"]);
    $verification_code = trim($data["verification_code"]);

    $sql = "SELECT id FROM USERS WHERE email = ? AND verificationCode = ? AND emailVerifiedAt IS NULL";
    $stmt = $con->prepare($sql);
    $stmt->bind_param("ss", $email, $verification_code);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        echo json_encode(['status'=>'error','message'=>'Code de vérification invalide ou email déjà vérifié.']);
        exit();
    }

    $sql = "UPDATE USERS SET emailVerifiedAt = NOW() WHERE email = ?";
    $stmt = $con->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();

    echo json_encode(['status'=>'success','message'=>'Email vérifié avec succès. Vous pouvez maintenant vous connecter.']);
    exit();

?>

