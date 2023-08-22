// controllers.js

angular.module('myApp.controllers', [])

// Controller for the home page
.controller('HomeController', ['$scope', function($scope) {
    $scope.message = 'Welcome to the Home Page!';
}])

// Controller for the about page
.controller('AboutController', ['$scope', function($scope) {
    $scope.message = 'Welcome to the About Page!';
}])

// Controller for the contact page
.controller('ContactController', ['$scope', function($scope) {
    $scope.message = 'Welcome to the Contact Page!';
    $scope.contactForm = {
        name: '',
        email: '',
        message: ''
    };

    $scope.submitContactForm = function() {
        // Here, you can implement logic to send the contact form data to the server or perform other actions.
        console.log('Contact Form Data:', $scope.contactForm);
        // Clear the form after submission
        $scope.contactForm = {
            name: '',
            email: '',
            message: ''
        };
    };
}]);

