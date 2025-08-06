<?php
// Database connection
header("Access-Control-Allow-Origin: *"); // Allow all origins (use specific domain in production)
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

// Database connection | REPLACE CONFIG ACCORDINLY.
$host = 'LocalHost';
$db   = 'dbName';   
$user = 'username';   
$pass = 'userPassword';  

$charset = 'utf8mb4';

$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
  die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}

// Get and sanitize input
$id = isset($_POST['id']) ? intval($_POST['id']) : 0;
$favorite = isset($_POST['favorite']) ? intval($_POST['favorite']) : 0;

if ($id > 0) {
  $stmt = $conn->prepare("UPDATE events SET favorite = ? WHERE id = ?");
  $stmt->bind_param("ii", $favorite, $id);

  if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Favorite updated."]);
  } else {
    echo json_encode(["success" => false, "message" => "Update failed."]);
  }

  $stmt->close();
} else {
  echo json_encode(["success" => false, "message" => "Invalid ID."]);
}

$conn->close();
?>
