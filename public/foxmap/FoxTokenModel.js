define(function(require) {
	var Backbone = require('Backbone');

	return Backbone.Model.extend({
		urlRoot: 'http://127.0.0.1:3000/v1/token',
		url: function() {
			return this.urlRoot;
		}
	});
	
});