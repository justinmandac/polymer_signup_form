(() => {
  const SignupFormMixin = window.SignupForm.Mixins.SignupFormMixin;
  
  class MainApp extends SignupFormMixin(Polymer.Element) {
    static get is() { return 'main-app'; }
  }
  
  customElements.define(MainApp.is, MainApp);
})()