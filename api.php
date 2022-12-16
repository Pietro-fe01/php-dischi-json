<?php
    // Traduzione da file json ad array php
    $file_json = file_get_contents('dischi.json');
    $vinyls = json_decode($file_json, true);
    
    // manipolazione array in variabile php

    // Traduzione da array php a file json
    header('Content-Type: application/json');
    echo json_encode($vinyls);
?>