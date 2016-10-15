angular.module('app').controller('landingCtrl', function($scope, $state, mainServices){
  $scope.getInputs= function(){
  $scope.currentUser =  mainServices.getData();
  };
  $scope.getInputs();

});
