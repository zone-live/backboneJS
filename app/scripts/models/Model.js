define(["jquery", "backbone"],

    function($, Backbone) {

        var User = Backbone.Model.extend({
            // Model Constructor
            initialize: function() {
                console.log('Model initiated');
            },
            getFirstName: function() {
                return this.get('firstname');
            },
            getLastName: function() {
                return this.get('lastname');
            },
            getAge: function() {
                return this.get('age');
            },
            urlRoot: '/users',
            // Gets called automatically by Backbone when the set and/or save methods are called (Add your own logic)
            validate: function(attrs) {

            }
        });

        //var user = new User();
        // Returns the Model class
        return User;

    }

);