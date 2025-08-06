<?php
header("Access-Control-Allow-Origin: *"); // Allow all origins (use specific domain in production)
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

// Database config | Replace accordingly
$host = 'LocalHost';
$db   = 'dbName';   
$user = 'username';   
$pass = 'userPassword';   

$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

try {
    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);

    $stmt = $pdo->query("SELECT * FROM events");
    $events = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($events);

} catch (PDOException $e) {
    echo json_encode([
        'error' => 'Database error: ' . $e->getMessage()
    ]);
}
?>
