import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		findIncludes: function () {
			this.transitionTo('search', encodeURIComponent(this.get('repoURI')), encodeURIComponent(this.get('searchLine')));
		}
	}
});
