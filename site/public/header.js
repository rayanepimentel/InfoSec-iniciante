class Header extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
      <header>
        <div class="nav-container">
          <nav>
            <div class="logo"></div><a href="/InfoSec-iniciante" style="font-size: xx-large;">&#x1F47E;</a>
            <div class="nav-bar"><a href="/InfoSec-iniciante">Início_</a>
            <a href="/InfoSec-iniciante/site/cronograma/cronograma.html">Cronograma_</a><a href="">WhereAmI_</a><a href="">Técnicas e mais_</a></div>
          </nav>
        </div>
      </header>
      `;

      // Adiciona um ouvinte de evento de clique a todos os links do menu
      const menuLinks = this.querySelectorAll('.menu-link');
      menuLinks.forEach(link => {
          link.addEventListener('click', event => {
              event.preventDefault(); // Prevenir o comportamento padrão de seguir o link
              const href = link.getAttribute('href');
              window.history.pushState({}, '', href); // Altera a URL sem recarregar a página
          });
      });
  }
}
customElements.define("meu-header", Header);
