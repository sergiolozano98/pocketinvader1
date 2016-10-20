var app = angular.module("pInvApp", []);

app.controller("pInvAppCtrl", function($scope,$http) {
    //Creacion del array de imagenes
    $scope.imgs = new Array(4);
    for (i = 0; i < 4; i++) {
      $scope.imgs[i] = new Array(4);
      for (j = 0; j < 4; j++) {
        $scope.imgs[i][j]={img:"img/celdaPocketInvaders100.png"};
      }
    }
    //Posicion inicial de nave
    $scope.naveActualFila=3;
    $scope.naveActualColumna=3;
    $scope.naveAnteriorFila=3;
    $scope.naveAnteriorColumna=3;
    $scope.imgs[3][3].img="img/celdaNavePocketInvaders100.png";
    //Petición a mover nave
    $scope.posicion;
    $scope.mueveNave = function() {
        $http.get("lib/app.php")
          .then(function(response) {
              $scope.posicion = response.data;
              $scope.imgs[$scope.naveActualFila][$scope.naveActualColumna].img="img/celdaPocketInvaders100.png";
              $scope.naveActualFila=$scope.posicion.fila;
              $scope.naveActualColumna=$scope.posicion.columna;
              $scope.imgs[$scope.posicion.fila][$scope.posicion.columna].img="img/celdaNavePocketInvaders100.png";
          });
    };
    $scope.resetea = function() {
      $scope.imgs[3][3].img="img/celdaNavePocketInvaders100.png";
      $scope.imgs[$scope.naveActualFila][$scope.naveActualColumna].img="img/celdaPocketInvaders100.png";
      $scope.naveActualFila=3;
      $scope.naveActualColumna=3;
    };
    $scope.mueveNavePos = function($i,$j) {
      $http.get("lib/app.php?fil="+$i+"&col="+$j)
        .then(function(response) {
            $scope.posicion = response.data;
            $scope.imgs[$scope.naveActualFila][$scope.naveActualColumna].img="img/celdaPocketInvaders100.png";
            $scope.naveActualFila=$scope.posicion.fila;
            $scope.naveActualColumna=$scope.posicion.columna;
            $scope.imgs[$scope.posicion.fila][$scope.posicion.columna].img="img/celdaNavePocketInvaders100.png";
            $scope.naveAnteriorFila=$scope.naveActualFila;
            $scope.naveAnteriorColumna=$scope.naveActualColumna;
        });
    };
    $scope.mueveNavePosInput = function($i,$j) {
      $http.get("lib/app.php?fil="+$i+"&col="+$j)
        .then(function(response) {
            $scope.posicion = response.data;
            $scope.imgs[$scope.naveAnteriorFila][$scope.naveAnteriorColumna].img="img/celdaPocketInvaders100.png";
            $scope.naveActualFila=$scope.posicion.fila;
            $scope.naveActualColumna=$scope.posicion.columna;
            $scope.imgs[$scope.posicion.fila][$scope.posicion.columna].img="img/celdaNavePocketInvaders100.png";
            $scope.naveAnteriorFila=$scope.naveActualFila;
            $scope.naveAnteriorColumna=$scope.naveActualColumna;
        });
    };

});
