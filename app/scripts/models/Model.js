define(["jquery", "backbone"],

    function($, Backbone) {

        var User = Backbone.Model.extend({
            // Model Constructor
            initialize: function() {
                console.log('Model initiated');
            },


            // urlRoot: '/users?page=2',
            // getUsers: function() {
            //     return this.get('data');
            // },
            
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