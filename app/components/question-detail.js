import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('question question_id');
    }
    // update(question, params) {
    //   this.sendAction('update', question, params);
    // }
  }
});
