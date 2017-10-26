((SignupFormMixin) => {  
  class MainApp extends SignupFormMixin(Polymer.Element) {
    static get is() { return 'main-app'; }
  }
  
  customElements.define(MainApp.is, MainApp);
})(window.SignupForm.Mixins.SignupFormMixin)