var app = angular.module("pInvApp", []);

app.controller("pInvAppCtrl", function($scope,$http) {
    $scope.imgs = new Array(4);
    $scope.imgs[1]=[
      {
        img:"img/celdaPocketInvaders100.png"
      },
      {
        img:"img/celdaPocketInvaders100.png"
      },
      {
        img:"img/celdaPocketInvaders100.png"
      },
      {
        img:"img/celdaPocketInvaders100.png"
      }
    ];
    $scope.imgs[2]=[
      {
        img:"img/celdaPocketInvaders100.png"
      },
      {
        img:"img/celdaPocketInvaders100.png"
      },
      {
        img:"img/celdaPocketInvaders100.png"
      },
      {
        img:"img/celdaPocketInvaders100.png"
      }
    ];
    $scope.imgs[3]=[
      {
        img:"img/celdaPocketInvaders100.png"
      },
      {
        img:"img/celdaPocketInvaders100.png"
      },
      {
        img:"img/celdaPocketInvaders100.png"
      },
      {
        img:"img/celdaPocketInvaders100.png"
      }
    ];
    $scope.imgs[4]=[
      {
        img:"img/celdaPocketInvaders100.png"
      },
      {
        img:"img/celdaPocketInvaders100.png"
      },
      {
        img:"img/celdaPocketInvaders100.png"
      },
      {
        img:"img/celdaNavePocketInvaders100.png"
      }
    ];
    $scope.naveActualFila=4;
    $scope.naveActualColumna=3;
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
      $scope.imgs[4][3].img="img/celdaNavePocketInvaders100.png";
      $scope.imgs[$scope.naveActualFila][$scope.naveActualColumna].img="img/celdaPocketInvaders100.png";
      $scope.naveActualFila=4;
      $scope.naveActualColumna=3;
    }

});
