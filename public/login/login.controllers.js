(function() {
  'use strict';

  angular
    .module('login')
    .controller('LoginController', function($scope, $location, LoginService){
        var vm = this;

        vm.login = function(userInfo){
          LoginService.login(userInfo).then(function(res){
            console.log(res);
            sessionStorage.setItem('username', res.data.username);
            sessionStorage.setItem('id', res.data.id);
            $location.path('/home');
          }, function(res){
            if(res.data.status === 405){
              alert("Wrong Password. Please try again");
            }
            else if(res.data.status === 403){
              var goOn = confirm(res.data.message + " Create new user?");
              if(goOn){
              $location.path('/newUser');
            }
          }
          else{
            alert("Please enter both a username and Password");
          }
          });
        };
    });


}());