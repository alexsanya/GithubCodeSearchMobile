import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
		var url = 'https://api.github.com/search/code?q='+params.line+'+in:file+language:js+repo:'+params.repo;
		return Ember.$.getJSON(url).then(function(matches) {
			return {
				repo: decodeURIComponent(params.repo),
				line: params.line,
				matches: matches
			}
		});
	}
});
