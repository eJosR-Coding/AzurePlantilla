<?php
include '../config/database.php';

$sql = "SELECT * FROM Cliente";
$result = $conn->query($sql);

$clients = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $clients[] = $row;
    }
}

echo json_encode($clients);
?>
