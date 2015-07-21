import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
		return Ember.$.getJSON('https://api.github.com/search/code?q='+params.line+'+in:file+language:js+repo:'+params.repo);
	}
});
