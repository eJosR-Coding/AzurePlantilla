<?php
include '../config/database.php';

$sql = "SELECT * FROM Venta";
$result = $conn->query($sql);

$sales = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $sales[] = $row;
    }
}

echo json_encode($sales);
?>
