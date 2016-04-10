import Ember from 'ember';

export default Ember.Component.extend({
  answerSorting: ['author'],
  sortedAnswers: Ember.computed.sort('question.answers', 'answerSorting'),

  actions: {
    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('question question_id');
    }
  }
});
