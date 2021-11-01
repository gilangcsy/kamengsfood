class MyFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer id="footer">
        <div class="row">
            © 2021 KamengsFood. All Rights Reserved.
        </div>
    </footer>
    `;
  }
}

customElements.define('my-footer', MyFooter);
