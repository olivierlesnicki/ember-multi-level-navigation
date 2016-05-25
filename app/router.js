import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // I've listed all categories
  this.route('categories', {path: '/'}, function () {

    // I'm showing the filter question
    this.route('category', {path: '/:id'}, function() {

      // I'm showing all contact methods
      this.route('customer-type', {path: '/:type'}, function () {

        this.route('faq');
        this.route('phone');
        this.route('email');
        this.route('webchat');

      });
    });
  });
});

export default Router;
