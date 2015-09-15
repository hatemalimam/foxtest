var curl;
(function () {

	curl({
		main: 'foxmap',
		packages: {			
			foxmap: { location: 'foxmap' },
			// Third-party packages
			curl: { location: 'lib/curl/src/curl' },
			jquery: { location: 'lib/jquery/dist/jquery', main: '.' },
			Backbone: { location: 'lib/backbone-amd/backbone', main: '.' },
			underscore: { location: 'lib/lodash/lodash', main: '.' },				
		}
	});

}());