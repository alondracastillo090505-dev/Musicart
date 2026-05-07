<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$conexion = new mysqli("localhost", "root", "", "schema");

if ($conexion->connect_error) {
    echo json_encode(["success" => false]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$usuario = $data["usuario"];
$password = $data["password"];

$sql = "SELECT * FROM usuarios WHERE usuario = ? AND password = ?";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("ss", $usuario, $password);
$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows > 0) {

    echo json_encode(["success" => true]);

} else {

    echo json_encode(["success" => false]);

}
?>