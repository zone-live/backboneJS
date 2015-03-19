define(["jquery","backbone","models/Model"],

  function($, Backbone, Model) {

	var Users = Backbone.Collection.extend({
        initialize: function() {
            console.log('Collection initialized');
        },
		url: '/users'
	});

	//var users = new Users();
    // Returns the Model class
    return Users;

  }

);