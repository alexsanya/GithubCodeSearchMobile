import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
		var url = 'https://raw.githubusercontent.com/'+decodeURIComponent(params.repo)+'/master/'+decodeURIComponent(params.path);
		return Ember.$.get(url).then(function (content) {
			return {
				fileContent: content,
				line: params.line,
				path: decodeURIComponent(params.path)
			}
		});
	}
});
