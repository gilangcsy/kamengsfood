class MyHeader extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `

    <header id="hero">
    	<div class="hero-content">
    		<div class="header-text">
    			KamengsFood
    		</div>
    		<p>
    			The Best Indonesian Food Restaurant You've Ever Meet.
    		</p>

    		<div>
    			<button type="button">GET STARTED</button>
    		</div>
    	</div>
    </header>
    `;
	}
}

customElements.define('my-header', MyHeader);
