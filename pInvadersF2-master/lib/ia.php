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
  }

  public function setfila($fil)
  {
    $this->fila = $fil;
  }

  public function RandomPos(){
   }
  }
 ?>
