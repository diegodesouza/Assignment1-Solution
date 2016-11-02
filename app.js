(function(){
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.foods = '';
    $scope.message;
    $scope.messageColor = {};

    $scope.checkIt = function() {
      var MAX_FOOD_LENGTH = 3;
      var foodList = $scope.foods.split(', ');
      var green = $scope.messageColor.style = {
        'color': 'green',
        'border': '1px solid green'
      };

      if(foodList[0] == '') {
        $scope.message = 'Please enter data first'
        $scope.messageColor.style = {
          'color': 'red',
          'border': '1px solid red'
        }
      } else if (foodList.length > MAX_FOOD_LENGTH) {
        $scope.message = 'Too much!'
        green
      } else {
        $scope.message = 'Enjoy!'
        green
      }
    };
  };
})();
