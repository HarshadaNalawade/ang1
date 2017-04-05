var app = angular.module('Books',[]);
app.controller('booksController', function($scope,$http) { 
  /*$scope.books = [
      {title:"A Tale Of Two Cities",author:"Charles Dickens"},
      {title:"David Copperfield",author:"Charles Dickens"},
      {title:"Emma",author:"Jane Austen"}
    ];*/
        $http.get('http://localhost:3000/books').
        success(function(response) {
          console.log(response);
          $scope.book1 = {'book_id':1,'author':'fgfgfg','title':'fgfg'};
          $scope.books = response;
        });
        $scope.editRecord = function(book_id) {
          $http.get('http://localhost:3000/books/edit/'+book_id).
            success(function(response) {
              var book=JSON.stringify(response);
              var json =  JSON.parse(book);
              $scope.book1 = {'book_id':json[0].book_id,'author':json[0].author,'title':json[0].title};
              //console.log($scope.book1);
          });
        };
        
       $scope.deleteRecord = function(book_id) {
          $http.delete('http://localhost:3000/books/'+book_id).
            success(function(response) {
            console.log(response);
              //$scope.book = response;
          });
        };
});
