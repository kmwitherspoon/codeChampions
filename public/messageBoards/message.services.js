(function() {
  'use strict';

  angular
    .module('message')
    .factory('MessageService', function($http, _){
      var getUrl = '/showReplies/1';
      var postUrl = '/addMessage';

      var getMessages = function(id){
        return $http.post('/showReplies/'+id, {id: 1});
      };
      var getReplies = function(Id){
        return $http.post('/showReplies/' + Id, {id: Id});
      };
      var sendNewMessage = function(newMessage, userName, id){
        var obj = {messageText: newMessage};
        console.log(obj);
        return $http.post(postUrl + '/' + id, obj);
      };


      var sendReply = function(replyMessage, replyId){
        var obj = {messageText: replyMessage};
        console.log(obj);
        return $http.post(postUrl + '/' + replyId, obj);
      };

      var check = function(){
        console.log("in message service");
        console.log("worked, bitch");
      };

      return{
          sendReply: sendReply,
          sendNewMessage: sendNewMessage,
          check: check,
          getMessages: getMessages,
          getReplies: getReplies
      };
    });
}());