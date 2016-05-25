import Ember from 'ember';

export default Ember.Route.extend({
  redirect(model) {  
    if (!model.customerTypes.length) {
      this.transitionTo('categories.category.customer-type', 'all');
    }
  }
});
