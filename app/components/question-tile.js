import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),

  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    },
    addToList(question) {
      this.get('favoritesList').add(question);
    }
  }
});
