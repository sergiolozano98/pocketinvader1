<?php

class ia
{
  public $Columna = '3';
  public $Fila = '3';

  public function getColumna()
  {
  $this->Columna = rand(1,3);
  return $this->Columna;
  }

  public function getFila()
  {
  $this->Fila = rand(1,3);
  return $this->Fila;
  }

  }
 ?>
