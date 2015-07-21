import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
		var url = 'https://api.github.com/search/code?q=%1+in:file+language:js+repo:%2'
					.replace('%1', params.line)
					.replace('%2', params.repo);
		return Ember.$.getJSON(url);
	}
});
