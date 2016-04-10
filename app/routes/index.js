import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  sortBy: ['content:asc'],
  sortedQuestions: Ember.computed.sort('qeustion', 'sortBy'),

  actions: {
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!== undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
  }
});
