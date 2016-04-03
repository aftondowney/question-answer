import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer1() {
      var params = {
        answer: this.get('answer'),
        author: this.get('author'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer2', params);
    }
  }
});
