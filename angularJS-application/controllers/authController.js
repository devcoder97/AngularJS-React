// controllers/authController.js

angular.module('myApp.controllers', [])


.controller('RegisterController', ['$scope', '$location', 'AuthService', function($scope, $location, AuthService) {
    $scope.user = {
        username: '',
        password: ''
    };

    $scope.register = function() {
        var isRegistered = AuthService.registerUser($scope.user);
        if (isRegistered) {
            // If the user is successfully registered, redirect to the login page
            $location.path('/login');
        }
    };
}])

.controller('LoginController', ['$scope', '$location', 'AuthService', function($scope, $location, AuthService) {
    $scope.credentials = {
        username: '',
        password: ''
    };

    $scope.login = function() {
        var user = AuthService.loginUser($scope.credentials.username, $scope.credentials.password);
        if (user) {
            // If the user is registered, log them in and redirect to the home page
            $scope.isLoggedIn = true;
            $location.path('/');
        } else {
            // If the user is not registered, show an error message
            $scope.loginError = 'Invalid username or password.';
        }
    };
}])

.controller('HomeController', ['$scope', function($scope) {
    $scope.message = 'Welcome to the Home Page!';
}])

.controller('AboutController', ['$scope', function($scope) {
    $scope.message = 'Welcome to the About Page!';
}])


.controller('ContactController', ['$scope', '$location', 'AuthService', function($scope, $location, AuthService) {
    $scope.user = {
        name: '',
        email: '',
        image: ''
    };

    $scope.uploadImage = function(event) {
        // Read the uploaded image file and set it in the user object
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            $scope.user.image = e.target.result;
            $scope.$apply();
        };
        reader.readAsDataURL(file);
    };

    $scope.submitContactForm = function() {
        // Save the user information in the AuthService
        AuthService.setLoggedInUser($scope.user);

        // Redirect to the UserInfo page to display the user information
        $location.path('/userInfo');
    };
}])

.controller('UserInfoController', ['$scope', 'AuthService', function($scope, AuthService) {
    // Retrieve the logged-in user information from the AuthService
    $scope.user = AuthService.getLoggedInUser();
}]);
