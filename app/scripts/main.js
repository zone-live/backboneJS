var UserList = Backbone.View.extend({
	el: '.page',
	render: function () {
		this.$el.html('CONTENT SHOULD SHOW HERE');
	}
});

var Router = Backbone.Router.extend({
	routes: {
		'': 'home'
	}
});

var userList = new UserList();

var router = new Router();
router.on('route:home', function() {
	userList.render();
});

Backbone.history.start();