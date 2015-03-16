$.ajaxPrefilter(function( options ) {
    options.url = 'http://backbone-beginner.herokuapp.com' + options.url;
});

var Users = Backbone.Collection.extend({
	url: '/users'
});

var UserList = Backbone.View.extend({
	el: '.page',
	render: function () {
		var that = this;
		var users = new Users();
		users.fetch({
			success: function(users) {

				var template = _.template($('#user-list-template').html());
				that.$el.html(template({
				   users: users.models // users.toJSON()
				})); 

			}
		});
	}
});

var EditUser = Backbone.View.extend({
	el: '.page',
	render: function () {

		var template = _.template($('#edit-list-template').html());
		this.$el.html(template); 

	}
});

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'new': 'editUser'
	}
});

var userList = new UserList();
var editUser = new EditUser();

var router = new Router();
router.on('route:home', function() {
	userList.render();
});

router.on('route:editUser', function() {
	editUser.render();
});

Backbone.history.start();