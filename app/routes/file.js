import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
		var url = 'https://raw.githubusercontent.com/'+decodeURIComponent(params.repo)+'/master/'+decodeURIComponent(params.path);
		return Ember.$.get(url).then(function (content) {
			return {
				content: content.split('\n').map(function (line) {
					var match = line.indexOf(params.line) >= 0;
					return {
						kind: match ? 'selected' : 'normal',
						text: line
					}
				}),
				path: decodeURIComponent(params.path)
			}
		});
	}
});
