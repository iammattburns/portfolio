<?php

function SendMail($to, $from, $from_name, $subject, $body) { 
    require("class.phpmailer.php");
    include("class.smtp.php");
    
    $mail                   = new PHPMailer();                      // Create a new PHPMailer instance
    $mail->IsSMTP();                                                // enable SMTP
    $mail->SMTPDebug        = 1;                                    // debugging: 1 = errors and messages, 2 = messages only
    $mail->SMTPAuth         = false;                                // authentication enabled
    //$mail->SMTPSecure       = 'ssl';                              // secure transfer enabled
    $mail->Host             = "localhost";     // SMTP Server
    $mail->Port             = 25;                                   // SMTP Server Port No
    //$mail->Username         = "";                                 // SMTP Server Username
    //$mail->Password         = "";                                 // SMTP Server Password
   
    $mail->SetFrom($from, $from_name);                              //Set who the message is to be sent from
    $mail->AddAddress($to);                                         //Set who the message is to be sent to
    
    $mail->IsHTML(true);                                            // Send message in HTML format 
    $mail->Subject          = $subject;                             // Set the subject line
    $mail->Body             = $body;                                // Set the message body
    
    if(!$mail->Send())
    {
        return 0;
    }
    else
    {
        return 1;
    }
}
    
?>