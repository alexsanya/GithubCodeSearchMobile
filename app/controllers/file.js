import Ember from 'ember';

export default Ember.ObjectController.extend({
	needs: 'form',
	fileLines: function () {
		var self = this;
		return self.get('model')
				.split('\n').map(function (line) {
					var match = line.indexOf(self.get('controllers.form.searchLine')) >= 0;
					return {
						kind: match ? 'selected' : 'normal',
						text: line
					}
				});
			
	}.property('model', 'controllers.form.searchLine'),

	path: function () {
		return this.get('model.path');
	}.property('model.path')
});
