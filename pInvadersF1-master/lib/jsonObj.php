<?php
/**
 *
 */
class jsonObj
{
  private $ia;
  function __construct($ia){
    $this->ia=$ia;
  }

  function devuelveNave(){
    $arr=['columna'=>0,'fila'=>0];
    $arr['columna']=$this->ia->getColumna();
    $arr['fila']=$this->ia->getFila();
    echo json_encode($arr);
  }
}

 ?>
