define(["jquery", "backbone", "backbone-controller"],

    function($, Backbone, User, BackboneController) {

        var mainController = Backbone.Controller.extend({
            initialize: function() {
                console.log('mainController initialized');
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

            // search: function(query, page) {
            // // create search model and view
            // }
        }); 

        //var mainController = new Controller();
        // Returns the Model class
        return mainController;

    }

);