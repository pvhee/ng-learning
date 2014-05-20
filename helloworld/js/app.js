var app = angular.module("myApp", []);

app.controller('MyController', function($scope) {
  $scope.person = {
    name: 'Peter'
  };
});

app.controller("MySecondController", function($scope, $parse) {

  $scope.person = {
    name: 'Peter Vanhee'
  };

  $scope.$watch('expr', function(newVal, oldVal, scope) {
    if (newVal !== oldVal) {
      // Let's set up our parseFun with the expression
      var parseFun = $parse(newVal);
      // Get the value of the parsed expression
      $scope.parsedValue = parseFun(scope);
    }
  });
});

// Create a custom filter
app.filter('customCapitalize', function() {
  return function(input) {
    if (input) {
      return input[0].toUpperCase() + input.slice(1) + " -- got capitalized &copy; --";
    }
  }
});
