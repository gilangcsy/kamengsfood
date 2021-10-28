class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav>
            <div class="logoTextMobile">
                KamengsFood
            </div>
            <div class="nav" id="nav">
                <div class="logoText">
                    KamengsFood
                </div>
                <div class="logoTextMobileSidebar">
                    KamengsFood
                </div>
                <ul>
                    <li>
                        <a class="active" href="/">HOME</a>
                    </li>
                    <li>
                        <a href="#/myfavorite">FAVORITE</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/gilangcsy/" rel="noopener" target="_blank">ABOUT</a>
                    </li>
                </ul>
            </div>

            <aside id="sidebar">
                <a id="hamburgerButton">&#9776;</a>
            </aside>
        </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
