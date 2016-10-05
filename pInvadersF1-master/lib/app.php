<?php
  include 'jsonObj.php';
  include 'ia.php';

  $iaJuego=new ia();
  $jsObj=new jsonObj($iaJuego);
  $jsObj->devuelveNave();
?>
