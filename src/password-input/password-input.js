class PasswordInput extends Polymer.Element {
  static get is() { return 'password-input'; }

  static get properties() {
    return {
      required: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
      },

      value: {
        type: String,
        value: '',
      },

      /** @private */
      _passwordPair: {
        type: String,
        value: ''
      },
    };
  }
}


window.customElements.define(PasswordInput.is, PasswordInput);