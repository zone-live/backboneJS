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
            checkCurrentView: function(view) {
                if (this.currentView) {

                    console.log('ENTROU NA currentView');

                    this.currentView.$el.empty();
                    this.currentView.stopListening();
                    this.currentView.unbind();
                    this.currentView.remove();
                }
                this.currentView = view;
                console.log(view);
                $('.page').html(view.render().el);

                return this;
            },
            home: function() {
                //require one time the view in each router function
                var that = this;
                require(["views/View-user-list"], function(UserList) {
                    that.checkCurrentView(new UserList());
                });
            },
            editUser: function(id) {
                var that = this;
                require(["views/View-user-edit"], function(EditUser) {
                    that.checkCurrentView(new EditUser({id:id}));
                });
            }

        });

        // Returns the Router class
        return Router;

    }

);