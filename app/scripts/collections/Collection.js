define(["jquery","backbone","models/Model"],

  function($, Backbone, User) {

	var Users = Backbone.Collection.extend({
		model: User,
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