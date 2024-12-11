<?php 

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json");
header("Access-Control-Allow-Credentials: true");

$con = new mysqli('127.0.0.1', 'root', '', 'myshrty');
if ($con->connect_error) {
    die(json_encode(["error" => "Database connection failed: " . $con->connect_error]));
}

$data = json_decode(file_get_contents("php://input"), true);
if (!$data || !isset($data['email'], $data['password'])) {
    echo json_encode(["error" => "Invalid input data."]);
    exit;
}

$email = $con->real_escape_string($data["email"]);
$password = $data["password"];

$stmt = $con->prepare("SELECT * FROM USERS WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

if (!$user) {
    echo json_encode(["error" => "Invalid email or password1."]);
    exit;
}

$ps = $user['password'];

if ($password !== $ps) {
    echo json_encode(["error" => "Invalid email or password2. $password , $ps"]);
    exit;
}



echo json_encode(["success" => "Login successful","id"=>$user['id'],"username"=>$user['username'],"photo"=>$user['photo']]);

?>
