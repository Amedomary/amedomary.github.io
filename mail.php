<?php 

//Script Foreach
$value= '-';
$message = 'value';
$c = true;
foreach ( $_POST as $key => $value ) {
    if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
        $message .= "
        " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
            <td style='padding: 2px; border: #e9e9e9 1px solid;'><b>$key</b></td>
            <td style='padding: 2px; border: #e9e9e9 1px solid;'>$value</td>
        </tr>
        ";
    }
}
$message = "<table style='width: 100%;'>$message</table>";


require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'amed_web@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'nnfksiwl42p&*^hd'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('amed_web@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('amed_web@mail.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Hey, m =))) i love you :** ';
$mail->Body    = $message;
$mail->AltBody = 'from my';

// $mail->SMTPDebug=5;

if(!$mail->send()) {
    echo 'Error';
} else {
    // echo 'Done, mail send';    
    header('location: /');
}
?>