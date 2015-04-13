define(["jquery", "backbone", "routers/Router", "models/Model", "text!templates/view_userForm.html"],

    function($, Backbone, Router, User, template){

        // Vista de edição do utilizador, contém a função render, saveUser e deleteUser.
        // Usa o template: "text!templates/view_userForm.html" e a data do modelo
        var EditUser = Backbone.View.extend({

            // The DOM Element associated with this view
           // el: ".page",
           tagName: 'section',

            // View constructor
            initialize: function(options) {
                console.log('View UserEdit initialized');
                // Calls the view's render method
                //this.render();
                this._id = options.id;
            },
            // View Event Handlers
            events: {
                'submit .edit-user-form': 'saveUser',
                'click .delete': 'deleteUser'
            },
            render: function (options) {
                var that = this;
                if (this._id) {
                    that.user = new User({id: options.id});
                    that.user.fetch({
                        success: function() {
                            var templateEditUser = _.template(template, {});
                            that.$el.html(templateEditUser({
                               user: that.user
                            }));
                        }
                    });
                } else {

                    var templateNEW = _.template(template, {});
                    that.$el.html(templateNEW({
                       user: null
                    })); 
                }
                return this;
            },
            // Função de SAVE user
            saveUser: function(event) {
                var userDetails = $(event.currentTarget).serializeObject();
                var user = new User(userDetails);

                user.save(null, {
                    success: function() {
                        console.log('success');
                        Backbone.history.navigate('', {trigger: true});
                    },
                    error: function() {
                        alert('ERROR!');
                    }
                })
                return false;
            },
            // Função de DELETE user
            deleteUser: function(event) {
                this.user.destroy({
                    success: function() {
                        Backbone.history.navigate('', {trigger: true});
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