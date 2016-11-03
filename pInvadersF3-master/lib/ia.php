<?php
//Creamos la clase
class ia
{
//definimos las variables y propiedades.
  public $mapaCol =4;
  public $mapaFil =4;
  public $numNaves =3;
  // creamos el arrayIA que almacena las 3 naves y el array navesHumano.
  public $navesHumano =[];
  public $navesIA = [
    0 => [
      "tipo"=> "nave",
      "col"=> "0",
      "fil"=> "3"
    ],

    1 => [
      "tipo"=> "nave",
      "col"=> "1",
      "fil"=> "3"
    ],

    2 => [
      "tipo"=> "nave",
      "col"=> "2",
      "fil"=> "3"
    ]

  ];
// definimos los getters que devuelven el valor.
public function getFila(){
  return $this->mapaFil;
}
public function getColumna(){
  return $this->mapaCol;
}
public function getNave(){
return $this->$numNaves;
}
public function getNaveHumano(){
return $this->navesHumano;
}
public function getNavesIA(){
return $this->navesIA;
}
//definimos los setter que definen los valores.
public function setMapaFil($mapaFil){
  if ($mapaFil<0){
    $this->mapaFil=0;
  }elseif($mapaFil>3)  {
    $this->mapaFil=3;
  }else{
  $this->mapaFil=$mapaFil;
}
}

public function setMapaCol($mapaCol){
  if ($mapaCol<0){
    $this->mapaCol=0;
  }elseif($mapaCol>3)  {
    $this->mapaCol=3;
  }else{
  $this->mapaCol=$mapaCol;
}
}


public function setNavesIA($navesIA){
  return $this->navesIA;
}
//introducimos un set de la nave y dentro del set un array que seria la nave humana.
public function setNaveHumana($tipo,$fil,$col){
  $this->navesHumano[]=[
    "tipo"=>$tipo,
    "col"=>$col,
    "fil"=>$fil,
  ];
}

public function randomPos(){
  $this->columna=rand(0,3);
  $this->fila=rand(0,3);
}

  }


 ?>
