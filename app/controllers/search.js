import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		showFile: function (repo, file, line) {
			this.transitionTo('file', encodeURIComponent(repo), encodeURIComponent(file.path), encodeURIComponent(line));
		}
	}
});
