<?php
if (isset($_POST["verify_email"])) {
    $con = new mysqli('127.0.0.1', 'root', '', 'myshrty');


    $email = trim($_POST["email"]);
    $verification_code = trim($_POST["verification_code"]);

    $sql = "SELECT id FROM user WHERE email = ? AND verifictionCode = ? AND emailVerifiedAt IS NULL";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $email, $verification_code);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        die("Code de vérification invalide ou email déjà vérifié.");
    }

    $sql = "UPDATE user SET emailVerifiedAt = NOW() WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();

    echo "<p>Email vérifié avec succès. Vous pouvez maintenant vous connecter.</p>";
    exit();
}
?>
