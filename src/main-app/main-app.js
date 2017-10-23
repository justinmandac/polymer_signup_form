class MainApp extends Polymer.Element {
  static get is() { return 'main-app'; }

  static get properties() {
    return {
      formData: {
        type: Object,
        value: () => ({}),
      },
    };
  }
}

customElements.define(MainApp.is, MainApp);