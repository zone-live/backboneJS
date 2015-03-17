$.ajaxPrefilter(function( options ) {
    options.url = 'http://backbone-beginner.herokuapp.com' + options.url;
});

$.fn.serializeObject = function() {
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};

var Users = Backbone.Collection.extend({
	url: '/users'
});
var User = Backbone.Model.extend({
	urlRoot: '/users'
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

	},
	events: {
		'submit .edit-user-form': 'saveUser' 
	},
	saveUser: function(event) {
		var userDetails = $(event.currentTarget).serializeObject();
		var user = new User();
		console.log(userDetails);

		user.save(userDetails, {
			success: function(user) {
				router.navigate('', {trigger: true});
			},
			error: function() {
				alert('ERROR!');
			}
		})
		return false;
	}
});

var Router = Backbone.Router.extend({
	routes: {
		''		: 'home',
		'new'	: 'editUser'
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