<?php
    $destinatario = 'jeffersonpierov@gmail.com';

    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $asunto = $_POST['mensaje'];
    
    $header = "Enviado desde la pagina del Portafolio de Jefferson Valencia";
    $mensajeCompleto = $mensaje."\nAtentamente:".$nombre;
    
    mail($destinatario,$asunto,$email,$header);
    echo "<script>alert('Correo enviado exitosamente')</script>";
    echo "<script>setTimeout(\"location.href='index.html'\",1000)</script>";

?>  