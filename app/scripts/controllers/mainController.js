define(["jquery", "backbone", "backbone-controller"],

    function($, Backbone, User, BackboneController) {

        // Controlador que gere a Current View (unbind e remove
        // quando se troca entre views) || BackboneController
        var MainController = Backbone.Controller.extend({
            initialize: function() {
                console.log('mainController initialized');
            },
            checkCurrentView: function(view) {
                if (this.currentView) {

                    console.log('ENTROU NA currentView');
                    //limpar view aquando mudança de página
                    this.currentView.$el.empty();
                    this.currentView.stopListening();
                    //unbind e remove da view
                    this.currentView.unbind();
                    this.currentView.remove();
                }
                this.currentView = view;
                console.log(view);
                $('.page').html(view.render().el);

                return this;
            },

        }); 

        //var mainController = new MainController();
        // Returns the Model class
        return MainController;

    }

);