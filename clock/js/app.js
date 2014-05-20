function MyController($scope) {

  $scope.clock = {
    now: new Date()
  };

  var updateClock = function() {
    $scope.clock.now = new Date();
    console.log($scope);
  };

  setInterval(function() {
    $scope.$apply(updateClock);
  }, 1000);

  updateClock();
};
