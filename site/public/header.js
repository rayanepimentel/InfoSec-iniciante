// footer-element.js
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <header>
        <div class="nav-container">
          <nav>
            <div class="logo"></div><a href="/" style="font-size: xx-large;">&#x1F47E;</a>
            <div class="nav-bar"><a href="../../index.html">Início_</a><a href="../cronograma/cronograma.html">Cronograma_</a><a href="">WhereAmI_</a><a href="">Técnicas e mais_</a></div>
          </nav>
        </div>
      </header>
    `;
    }
}
customElements.define("meu-header", Header);