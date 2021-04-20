<?php
	if(isset($_POST["nombre"]) && isset($_POST["email"]) && isset($_POST["telefono"]) && isset($_POST["mensaje"]) ){
		$to = "no-reply@c2191107.ferozo.com";
		$subject = "Consulta desde warmiventures.com";		
		$contenido = "Nombre: ".$_POST["nombre"]."\n\nEmail: ".$_POST["email"]."\n\nTelefono: ".$_POST["telefono"]."\n\nMensaje: ".$_POST["mensaje"]."\n\n";
		$header = "From: no-reply@c2191107.ferozo.com\nReply-To: ".$_POST["email"]."\n";
		$header .= "Mime-Version: 1.0\n";
		$header .= "Content-Type: text/plain";
		if(mail($to, $subject, $contenido ,$header)){
			include 'confirmation.html';
		}
	}
?>