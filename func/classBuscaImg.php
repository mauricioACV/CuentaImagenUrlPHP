<?php

class buscaImg{
    private $str1;    
    
    public function __construct($str_1){
        $this->str1=$str_1;              
    }
    
    public function validarObtener(){
        if($this->str1!=""){
            $resultado = self::contarImg();
        }
        else{            
            throw new Exception ("no se han ingresado url!");
        }
        return $resultado;
    }

    public function contarImg(){
        $url = $this->str1;
        $old_error_reporting = error_reporting(E_ALL ^ E_WARNING);
        $content = file_get_contents($url);
        error_reporting($old_error_reporting);
        if ($content === FALSE) {
            throw new Exception ("Url no es válida!");
        } 
        else{
            $pagina = file_get_contents($url);
            $contadorJpg= mb_substr_count($pagina, 'jpg');
            $contadorPng= mb_substr_count($pagina, 'png');
            $contadorJpeg= mb_substr_count($pagina, 'jpeg');
            $numImagenes=$contadorJpg+$contadorPng+$contadorJpeg;
        }
        return $numImagenes; 
    }
}