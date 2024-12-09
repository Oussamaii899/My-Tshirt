<?php 


$con = new mysqli('127.0.0.1', 'root', '', 'myshrty');
if ($con->connect_error) {
    die(json_encode(["error" => "Échec de la connexion à la base de données : " . $con->connect_error]));
}

$data = json_decode(file_get_contents("php://input"), true);
if (!$data || !isset($data['email'], $data['password'])) {
    die(json_encode(["error" => "Données invalides."]));
}

$email = $data["email"];
$password = $data["password"];

$query = "SELECT * from USERS where email='$email' and password='$pasword'";
$result= mysqli_query($con,$query) or die('erreur de requete');
$user= mysqli_fetch_assoc($result);

session_start();
    $_SESSION['id'] = $user['id'];
    $_SESSION['username'] = $user['username'];
    $_SESSION['email'] = $user['email'];
    $_SESSION['password'] = $user['password'];
    $_SESSION['photo'] = $user['photo'];
    $_SESSION['emailVerifiedAt'] = $user['emailVerifiedAt'];


?>