angular.module('userProfiles').controller('MainController', function($scope, mainService) {

  $scope.getUsers = function() {
  	mainService.getUsers().then(function(response){
      $scope.users = response.data.data;
    }, function(error){

    });
  }


  $scope.getUsers();

});
