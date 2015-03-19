define(["jquery", "backbone", "models/Model", "collections/Collection" ],

    function($, Backbone, User, Users) {

        var Router = Backbone.Router.extend({

            initialize: function() {
                console.log('Router initialized');
                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();
            },
            routes: {
                ''      : 'home',
                'new'   : 'editUser',
                'edit/:id': 'editUser'
            },
            home: function() {
                //require one time the view in each router function
                require(["views/View-user-list"], function(UserList) {
                    var userList = new UserList();
                    userList.render();
                });
            },
            editUser: function(id) {
                require(["views/View-user-edit"], function(EditUser) {
                    var editUser = new EditUser();
                    editUser.render({id: id});
                });
            }

        });

        // Returns the Router class
        return Router;

    }

);