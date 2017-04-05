var app = angular.module('Books',[]);
  app.controller('booksController',function($scope){
    $scope.books = [
      {title:"A Tale Of Two Cities",author:"Charles Dickens"},
      {title:"David Copperfield",author:"Charles Dickens"},
      {title:"Emma",author:"Jane Austen"}
    ];
  });
