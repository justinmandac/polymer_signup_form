window.SignupForm = {} || window.SignupForm;
window.SignupForm.Mixins = {} || window.SignupForm.Mixins;
window.SignupForm.Mixins.SignupFormMixin = (superclass) => 
class extends superclass {
  static get properties() {
    return {
      formData: {
        type: Object,
        value: () => ({}),
      },
    };
  }
};; 