import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
		var url = 'https://raw.githubusercontent.com/%1/master/%2'
					.replace('%1', decodeURIComponent(params.repo))
					.replace('%2', decodeURIComponent(params.path));
		return Ember.$.get(url);
	}
});
