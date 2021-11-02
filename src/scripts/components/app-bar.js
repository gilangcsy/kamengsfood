/* eslint-disable no-tabs */
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
			<aside id="sidebar">
                <a href="#"aria-label="hamburger button" id="hamburgerButton">&#9776;</a>
            </aside>
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
        </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
