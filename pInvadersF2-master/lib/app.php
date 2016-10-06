<?php
  include 'jsonObj.php';
  include 'ia.php';

  $iaJuego=new ia();
  $jsObj=new jsonObj($iaJuego);
  //Comprobación de accion
  if(isset($_GET['fil'])){
    $jsObj->generaNavePos($_GET['fil'],$_GET['col']);
  }else{
    $jsObj->generaNaveAle();
  }
  $jsObj->devuelveNave();
?>
