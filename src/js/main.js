'use strict';

var app = angular.module('web-search', ['ui.router']);

require('./bootstrap')(app);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})
		.state('results', {
			url: '/results/:query',
			templateUrl: 'views/results.html',
			controller: 'ResultsController'
		});

});