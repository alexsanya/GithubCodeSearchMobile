import Ember from 'ember';

export default Ember.Controller.extend({
	needs: 'form',
	actions: {
		showFile: function (file, line) {
			this.transitionTo('file', encodeURIComponent(this.get('controllers.form.repoURI')), encodeURIComponent(file.path), encodeURIComponent(line));
		}
	}
});
