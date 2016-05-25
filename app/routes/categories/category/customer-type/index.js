import Ember from 'ember';

export default Ember.Route.extend({
  redirect() {
    this.transitionTo('categories.category.customer-type.faq');
  }
});
