import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
actions: {
  updateQuestionForm() {
    this.set('updateQuestionForm', true);
  },
  update(question) {
    var params = {
      question: this.get('question'),
      author: this.get('author'),
      notes: this.get('notes'),
    };
    this.set('updateQuestionForm', false);
    this.sendAction('update', question, params);
  }
}
});
