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

  /** @private */
  _onPresubmit(evt) {
    evt.preventDefault();

    const form = Polymer.dom(this.root).querySelector('#form');
    const formData = form.request.body;

    console.log(formData);
  }
}

customElements.define(SignupForm.is, SignupForm);