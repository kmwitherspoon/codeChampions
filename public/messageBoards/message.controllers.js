(function() {
  'use strict';

  angular
    .module('message')
    .controller('MessageController', function($scope, $location, MessageService){
      var vm = this;
      vm.currentUser = sessionStorage.getItem('username');
      vm.sendNewMessage = function(newMessage){
        angular.element(document).find('input[name="message"]').val("");
        MessageService.sendNewMessage(newMessage, vm.currentUser, 1).then(function(res){
          vm.getMessages();
        });
      };

      vm.sendReply = function(replyMessage, replyId){
        console.log("replyID: " + replyId);
        angular.element(document).find('input[name="replymessage"]').val("");
        MessageService.sendReply(replyMessage, replyId).then(function(res){
          vm.getMessages();
        });
      };
      vm.check = function(){
        console.log("in message controller");
        MessageService.check();
      };
      vm.getMessages = function(){
        MessageService.getMessages(1).then(function(res){
          vm.messages = res.data;
          _.each(vm.messages, function(currVal, idx, arr){
            MessageService.getMessages(currVal.id).then(function(res){
              arr[idx].replies=res.data;
            });
          });
          console.log(vm.messages);
        });
    };
    vm.getMessages();
    });

}());