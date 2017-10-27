((SignupFormMixin = window.SignupForm.Mixins.DefaultMixin) => {
  class SignupForm extends SignupFormMixin(Polymer.Element) {
    static get is() { return 'signup-form'; }
  
    /** @private */
    _onPresubmit(evt) {
      evt.preventDefault();
  
      const form = Polymer.dom(this.root).querySelector('#form');
      const formData = form.request.body;
      // formData - apparently - will contain elements in the form with a 
      // [name] attribute.
      console.log(formData);
    }
  }
  
  customElements.define(SignupForm.is, SignupForm);
})(window.SignupForm.Mixins.SignupFormMixin);