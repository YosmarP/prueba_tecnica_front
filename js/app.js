var app = angular.module('newsApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/new', {
            templateUrl: 'views/new-news.html',
            controller: 'NewsController'
        })
        .when('/archived', {
            templateUrl: 'views/archived-news.html',
            controller: 'NewsController'
        })
        .otherwise({
            redirectTo: '/new'
        });
});