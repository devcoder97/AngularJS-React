// app.js

angular.module('myApp', ['ngRoute', 'myApp.controllers', 'myApp.services'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    // Add the following line to enable HTML5 mode
    $locationProvider.html5Mode(true);
    
    // Rest of your routing configuration remains the same
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegisterController'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .when('/userInfo', {
            templateUrl: 'views/userInfo.html',
            controller: 'UserInfoController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
