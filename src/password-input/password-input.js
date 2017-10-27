(() => {
  const behaviors = [Polymer.IronValidatableBehavior];
  class PasswordInput extends Polymer.mixinBehaviors(behaviors, Polymer.Element) {
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

    validate(value) {
      // super.validate calls IronValidatableBehavior.Validate      
      if (this.value === undefined || this.value.trim() == '') {
        // Exit early if value is blank. Password is required.
        this.invalid = true;
        return !this.invalid;
      }

      // Passwords do not match.
      this.invalid = !(this.value === this._passwordPair);
      return !this.invalid;
    }
  }
  
  
  window.customElements.define(PasswordInput.is, PasswordInput);
})();