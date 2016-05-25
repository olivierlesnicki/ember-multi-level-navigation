import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: 'first-link',
      route: 'categories.category',
      title: 'First Link',
      customerTypes: []
    }, {
      id: 'second-link',
      route: 'categories.category',
      title: 'Second Link',
      customerTypes: [
        'payge',
        'electricity'
      ]
    }];
  }
});
