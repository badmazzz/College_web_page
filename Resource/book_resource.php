<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $resource = $_POST['resource'];
  $date = $_POST['date'];
  $time = $_POST['time'];


  $message = "Resource '$resource' booked on $date at $time successfully.";

  header('Content-Type: application/json');
  echo json_encode(['message' => $message]);
} else {
  http_response_code(405);
  echo 'Invalid Request Method';
}

?>
