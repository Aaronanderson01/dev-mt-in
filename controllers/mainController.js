angular.module("app").controller('mainController', function($scope, mainServices, localStorageService, $state){
$scope.test = "this is a test.";

$scope.saveInputs = function(inputs) {
mainServices.saveData(inputs);
$state.go('landing');
};
$scope.getInputs= function(){
$scope.savedInputs =  mainServices.getData();
};

});
