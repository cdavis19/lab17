var app = angular.module('myMod');

app.controller('reddit', function($http, $scope) {
  $scope.redditData = {};

  $http({
    method: 'GET',
    url: 'https://www.reddit.com/r/awww/.json'
  }).then(function successfulCallback(response){
    console.log(response);
    $scope.redditData = response.data.data.children;

  });


});
