// dataService.js

angular.module('myApp.services', [])

// Data service to handle sample data
.factory('DataService', function() {
    // Sample data
    var users = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
    ];

    // Public API of the data service
    return {
        // Get all users
        getAllUsers: function() {
            return users;
        },

        // Get user by ID
        getUserById: function(id) {
            for (var i = 0; i < users.length; i++) {
                if (users[i].id === id) {
                    return users[i];
                }
            }
            return null;
        },

        // Save user information
        saveUser: function(user) {
            // Here, you can implement logic to send the updated user data to the server or perform other actions.
            var existingUser = this.getUserById(user.id);
            if (existingUser) {
                existingUser.name = user.name;
                existingUser.email = user.email;
            } else {
                // If the user is not found, assume it's a new user and add it to the list.
                user.id = users.length + 1;
                users.push(user);
            }
        },

        // Delete user by ID
        deleteUser: function(id) {
            for (var i = 0; i < users.length; i++) {
                if (users[i].id === id) {
                    users.splice(i, 1);
                    break;
                }
            }
        }
    };
});
