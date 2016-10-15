

angular.module('app').service('mainServices', function(localStorageService){

this.saveData = function(input){
localStorageService.store(input);
};

this.getData= function(){
  return localStorageService.getItem();
};

});
