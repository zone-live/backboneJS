define(["jquery", "backbone", "models/Model", "text!templates/view_userForm.html"],

    function($, Backbone, Model, template){

        var EditUser = Backbone.View.extend({

            // The DOM Element associated with this view
            el: ".page",
            // View constructor
            initialize: function() {
                console.log('View UserEdit initialized');
                // Calls the view's render method
                this.render();

            },
            // View Event Handlers
            events: {
                'submit .edit-user-form': 'saveUser',
                'click .delete': 'deleteUser'
            },
            render: function (options) {
                var that = this;
                if (options.id) {
                    that.user = new User({id: options.id});
                    that.user.fetch({
                        success: function() {
                            var template = _.template(template, {});
                            that.$el.html(template({
                               user: that.user
                            }));
                        }
                    });
                } else {
                    var template = _.template(template, {});
                    this.$el.html(template({
                       user: null
                    })); 
                }
            },
            saveUser: function(event) {
                var userDetails = $(event.currentTarget).serializeObject();
                var user = new User();

                user.save(userDetails, {
                    success: function(user) {
                        router.navigate('', {trigger: true});
                    },
                    error: function() {
                        alert('ERROR!');
                    }
                })
                return false;
            },
            deleteUser: function(event) {
                this.user.destroy({
                    success: function() {
                        router.navigate('', {trigger: true});
                    },
                    error: function() {
                        alert('ERROR!');
                    }
                });
                return false;
            }
        });

        // Returns the View class
        return EditUser;

    }

);

// var editUser = new EditUser();