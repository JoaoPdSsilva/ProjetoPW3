<?php

    // Declarar as variáveis necessárias para gerar a minha conexão com o banco de dados ....
    $hostname = "fdb28.awardspace.net";
    $dbname = "3547270_ptojetinpw3db";
    $username = "3547270_ptojetinpw3db";
    $password = "u%?w[z7}4ZRtXsrv";

    try {
        $pdo = new PDO('mysql:host='.$hostname.';dbname='.$dbname, $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // echo 'Conexão realizada com sucesso!!!';
    } catch (PDOException $e) {
        echo 'Error: '.$e->getMessage();
    }