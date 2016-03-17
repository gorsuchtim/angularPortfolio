angular.module("PortfolioApp")

.config(function($routeProvider) {

	$routeProvider.when('/home', {
			templateUrl: 'templates/home.html',
			
		})

	.when('/contact', {
		templateUrl: 'templates/contact.html',
	})

	.when('/about', {
		templateUrl: 'templates/about.html',
	})

	.when('/work', {
		templateUrl: 'templates/work.html',
	})

	.otherwise({ redirectTo: '/home'});

});
