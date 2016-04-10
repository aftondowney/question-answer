import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],

  add(item) {
    this.get('questions').pushObject(question);
  }
});
