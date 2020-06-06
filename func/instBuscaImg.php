<?php
include_once 'classBuscaImg.php';

try{
    $url="http://".$_POST['url'];
    $objeto=new buscaImg($url);
    $resultado=$objeto->validarObtener();    
    echo 'Existen <strong>'.$resultado.'</strong> imagenes entre extensiones JPG, PNG y JPEG en la página <strong>'.$url.'</strong><br>';
} 
catch(Exception $e) 
{
    echo $e->getMessage().'<br>';
}
