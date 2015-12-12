var appCtrl = angular.module('appCtrl',[]);

appCtrl.controller('navCtrl', [
  '$scope',
  '$location',
  function($scope,$location){
    $scope.setRoute = function(route) {
      $location.path(route);
    }
  }
]);

appCtrl.controller('viewCtrl', [
  '$scope',
  '$location',
  function($scope,$location){

  }
]);
