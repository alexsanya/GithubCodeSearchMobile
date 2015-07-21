import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		back: function() {
	      history.go(-1);
	    }
	}
});
