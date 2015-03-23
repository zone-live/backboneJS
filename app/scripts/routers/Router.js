define(["jquery", "backbone", "backbone-controller", "models/Model", "collections/Collection", "controllers/mainController" ],

    function($, Backbone, BackboneController, User, Users, mainController) {

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
                // var that = this;
                require(["views/View-user-list"], function(UserList) {
                    mainController.checkCurrentView(new UserList());
                });
            },
            editUser: function(id) {
                // var that = this;
                require(["views/View-user-edit"], function(EditUser) {
                    mainController.checkCurrentView(new EditUser({id:id}));
                });
            }

        });

        // Returns the Router class
        return Router;

    }

);