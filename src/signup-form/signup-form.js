(() => {
  const SignupFormMixin = window.SignupForm.Mixins.SignupFormMixin;
  
  class SignupForm extends SignupFormMixin(Polymer.Element) {
    static get is() { return 'signup-form'; }
  
    /** @private */
    _onPresubmit(evt) {
      evt.preventDefault();
  
      const form = Polymer.dom(this.root).querySelector('#form');
      const formData = form.request.body;
  
      console.log(this.formData);
    }
  }
  
  customElements.define(SignupForm.is, SignupForm);
})();