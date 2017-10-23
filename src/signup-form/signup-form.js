class SignupForm extends  Polymer.Element {
  static get is() { return 'signup-form'; }

  static get properties() {
    return {
      formData: {
        type: Object,
        value: () => ({}),
      },
    };
  }
}

customElements.define(SignupForm.is, SignupForm);