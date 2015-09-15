define(function(require) {
	var Backbone = require('Backbone');

	return Backbone.Model.extend({
		initialize: function(token) {
           this.token = token;
        },
		urlRoot: 'http://127.0.0.1:3000/v1/offers',
		url: function() {
			return this.urlRoot + "?token=" + this.token;
		}		
	});
	
});