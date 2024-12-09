<?php
header("Access-Control-Allow-Origin: *"); 
header("Content-Type: application/json");

$con = mysqli_connect('127.0.0.1','root','','myshrty');
$query = 'SELECT email, password from USERS';
$result= mysqli_query($con,$query) or die('erreur de requete');
$users= mysqli_fetch_all($result,MYSQLI_ASSOC);





echo json_encode($users);
