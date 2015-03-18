function htmlEncode(value){
	return $('<div/>').text(value).html();
}

function htmlDecode(value){
	return $('<div/>').html(value).text();
}

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
			success: function() {

				var template = _.template($('#user-list-template').html());
				that.$el.html(template({
				   users: users
				})); 

			}
		});
	}
});

var EditUser = Backbone.View.extend({
	el: '.page',

	render: function (options) {
		var that = this;
		if (options.id) {
			that.user = new User({id: options.id});
			that.user.fetch({
				success: function() {
					var template = _.template($('#edit-user-template').html());
					that.$el.html(template({
					   user: that.user
					}));
				}
			});
		} else {
			var template = _.template($('#edit-user-template').html());
			this.$el.html(template({
			   user: null
			})); 
		}
	},
	events: {
		'submit .edit-user-form': 'saveUser',
		'click .delete': 'deleteUser'
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

var Router = Backbone.Router.extend({
	routes: {
		''		: 'home',
		'new'	: 'editUser',
		'edit/:id': 'editUser'
	},
	home: function() {
		userList.render();
	},
	editUser: function(id) {
		editUser.render({id: id});
	}
});

var userList = new UserList();
var editUser = new EditUser();

var router = new Router();

Backbone.history.start();