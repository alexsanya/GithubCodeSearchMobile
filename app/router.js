import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('form', { path: '/'});
  this.route('error', { path: '/error/status/:status/text/:text'});
  this.resource('search', { path: '/search/repo/:repo/line/:line'});
  this.resource('file', { path: '/file/repo/:repo/path/:path/line/:line'});
});

export default Router;
