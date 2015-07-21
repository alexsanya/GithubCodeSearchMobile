import Ember from 'ember';

export default Ember.ObjectController.extend({
	fileLines: function () {
		var self = this;
		return self.get('model.fileContent')
				.split('\n').map(function (line) {
					var match = line.indexOf(self.get('model.line')) >= 0;
					return {
						kind: match ? 'selected' : 'normal',
						text: line
					}
				});
			
	}.property('model.fileContent', 'model.line'),

	path: function () {
		return this.get('model.path');
	}.property('model.path')
});
