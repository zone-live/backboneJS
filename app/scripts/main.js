var initCoolDependencies = function() {

	$('header').load('scripts/templates/partials/header.html');
	$('footer').load('scripts/templates/partials/footer.html');

	function htmlEncode(value){
		return $('<div/>').text(value).html();
	}

	function htmlDecode(value){
		return $('<div/>').html(value).text();
	}

	$.ajaxPrefilter(function( options ) {
	    options.url = 'http://backbone-beginner.herokuapp.com' + options.url;
	});

	//serialize form to JSON for POST request 
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

}

// Includes Desktop Specific JavaScript files here (or inside of your Desktop router)
define(["jquery", "backbone", "backbone-controller", "routers/Router", "controllers/mainController"],

	function($, Backbone, BackboneController, Router, Controller) {
  	
  		//init dependencies function
	  	initCoolDependencies();
	    // Instantiates a new Router instance
	    new Router();
  
});