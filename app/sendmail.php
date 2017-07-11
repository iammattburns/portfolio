<?php 



include("classes/sendmail.php");

$to = "iammattburns@gmail.com";
$from = $_POST['email'];
$from_name = $_POST['name'];
$subject = "Website Enquiry";
$message = "<strong>Name: </strong><br />".$_POST['name']."<br /><br />".
           "<strong>Email: </strong><br />".$_POST['email']."<br /><br />".
           "<strong>Message: </strong><br />".$_POST['message']."<br /><br />";


$result = SendMail($to, $from, $from_name, $subject, $message);

//echo $result;


?>