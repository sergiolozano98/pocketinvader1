<?php

class ia
{
  public $columna = '1';
  public $fila = '3';
// definimos metodos
  public function getcolumna()
  {
  return $this->columna;
  }

  public function getfila()
  {
  return $this->fila;
  }
  //utilizamos setter

  public function setcolumna($col)
  {
    $this->columna = $col;
    if ($col>3){
      $this->columna=3;
    }elseif($col<0){
      $this->columna=0;
    }else{
      $this->columna = $col;
    }
  }

  public function setfila($fil)
    {
    $this->fila = $fil;
    if ($fil>3){
      $this->fila=3;
    }elseif($fil<0){
      $this->fila=0;
    }else{
      $this->fila = $fil;
    }
    }


  public function RandomPos(){
   }
  }
 ?>
