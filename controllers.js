app.controller("SiteNav", function($scope, $location) {

	$scope.toHome = function() {
		$location.path('/home');
	};

	$scope.toAbout = function() {
		$location.path('/about');
	};

	$scope.toContact = function() {
		$location.path('/contact');
	};

	$scope.toWork = function() {
		$location.path('/work');
	};

});


