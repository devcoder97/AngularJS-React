// services/authService.js

angular.module('myApp.services', [])

.factory('AuthService', function() {
    var users = [];
    var loggedInUser = null; // Store the logged-in user (if any)

    return {
        registerUser: function(user) {
            // Check if the username is already taken
            var existingUser = users.find(function(u) {
                return u.username === user.username;
            });

            if (existingUser) {
                console.log('Username already taken.');
                return false;
            } else {
                users.push(user);
                console.log('User registered:', user);
                return true;
            }
        },

        loginUser: function(username, password) {
            var loggedInUser = users.find(function(user) {
                return user.username === username && user.password === password;
            });

            return loggedInUser;
        },

        // Check if the user is logged in
        isLoggedIn: function() {
            return !!loggedInUser;
        },

        // Store the logged-in user
        setLoggedInUser: function(user) {
            loggedInUser = user;
        },

        // Retrieve the logged-in user
        getLoggedInUser: function() {
            return loggedInUser;
        },

        // Logout the user
        logout: function() {
            loggedInUser = null;
        }
    };
});
