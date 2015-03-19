define(["jquery", "backbone", "models/Model", "collections/Collection", "text!templates/view_list.html"],

    function($, Backbone, User, Users, template){

        var UserList = Backbone.View.extend({
            el: '.page',

            // View constructor
            initialize: function() {
                console.log('View UserList initialized');
                // Calls the view's render method
                //this.render();
            },
            // View Event Handlers
            events: {

            },
            render: function () {
                var that = this;
                var users = new Users();

                users.fetch({
                    success: function() {
                        var templateView = _.template(template, {});

                        that.$el.html(templateView({
                           users: users
                        })); 

                        // Maintains chainability
                        return that;
                    }
                });
            }
        });
        
        // Returns the View class
        return UserList;

    }

);

// var userList = new UserList();