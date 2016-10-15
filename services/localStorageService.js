// INITILIZE APP
// ============================================================
var app = angular.module("app").service('localStorageService', function(){
  this.store = function(inputs){

  localStorage.setItem('inputs', JSON.stringify(inputs));
   };
   this.getItem= function(){
     return JSON.parse(localStorage.getItem('inputs'));
   };
});
