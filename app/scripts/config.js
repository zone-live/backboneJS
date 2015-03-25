require.config({

  // Sets the js folder as the base directory for all future relative paths
  baseUrl: "./scripts",

  // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
  // probably a good idea to keep version numbers in the file names for updates checking
  paths: {

      // Core Libraries
      // --------------
      "jquery": "libs/jquery.min",
      "underscore": "libs/underscore.min",
      "backbone": "libs/backbone.min",
      "backbone-controller": "libs/backbone.controller",

      // Plugins
      // -------
      "text": "libs/text"
  }//,

  // Sets the configuration for your third party scripts that are not AMD compatible
  // shim: {

  //     // jQuery Mobile
  //     "jquerymobile": ["jquery"],

  //     // Twitter Bootstrap jQuery plugins
  //     "bootstrap": ["jquery"],

  //     // jQueryUI
  //     "jqueryui": ["jquery"],

  //     // Backbone.validateAll plugin that depends on Backbone
  //     "backbone.validateAll": ["backbone"],

  //     // Jasmine-jQuery plugin
  //     "jasminejquery": ["jquery"]

  // }

});