import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyEntry', question);
      }
    },
    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('question question_id');
    }
  }
});
