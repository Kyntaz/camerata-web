<html>
    <head>
        <title> Submissão </title>
        <meta encoding="utf-8">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Montez|Roboto&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body style="text-align: center; padding: 50px;">
        <h1> Submissão de Email: </h1>

        <?php
        if ($_SERVER["REQUEST_METHOD"] != "POST") {
            die("No post body.");
        }

        $name = $_POST["name"];
        $email = $_POST["email"];
        $place = $_POST["place"];
        $date = $_POST["date"];
        $message = $_POST["message"];

        if (empty($name) || empty($email) || empty($place) || empty($date) || empty($message)) {
            die("Please Fill the Entire Form!");
        }

        mail("ca.appassionata@gmail.com", "Formulário Web: $name", "De: $email\nLocal: $place\nData: $date\n\n$message", "From: $email" . "\n\r");

        echo("<p> Obrigado! </p>")
        ?>
    </body>
</html>