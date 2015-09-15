define(function(require) {
    var Backbone = require('Backbone');
    var $ = require('jquery');
    var _ = require('underscore');

    return Backbone.View.extend({
        id: 'map',
        initialize: function() {
            this.render();
        },
        render: function() {
            console.log(this.model.attributes)
            var map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 52.521540, lng: 13.390804},
                zoom: 8
            });

            for (var key in this.model.attributes) {
                if (this.model.attributes.hasOwnProperty(key)) {

                    var mark = this.model.attributes[key];

                    var marker = new google.maps.Marker({
                        position: {lat: mark['lat'], lng: mark['long']},
                        map: map,
                    });
                }
            }
        }

    });
})