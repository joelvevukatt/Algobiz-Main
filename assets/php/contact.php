<?php
 $to = "athulattuu@gmail.com";
 $subject = $_POST['subject'];
 $body = "From, ".$_POST['name']."\n\n"."Email, ".$_POST['email']."\n\n" .$_POST['services']."\n\n".$_POST['message'];
 $headers = 'From: operations@algobiz.in'       . "\r\n" .
                 'Reply-To: vishnukalidas001@gmail.com' . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();
 if (mail($to, $subject, $body, $headers)) {
  $responseArray = array('class' => 'alert alert-success', 'message' => 'Message sent successfully. Thank you, will get back to you soon!');
  } else {
$responseArray = array('class' => 'alert alert-danger', 'message' => 'There was an error while submitting the form. Please try again later.');
     
  }

    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;

 ?>