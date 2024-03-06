👾 [Inicio](https://rayanepimentel.github.io/InfoSec-iniciante/) | [Técnicas e Ferramentas](https://rayanepimentel.github.io/InfoSec-iniciante/site/ferramentas/ferramentas.html) | [Osint](https://rayanepimentel.github.io/InfoSec-iniciante/site/ferramentas/osint/osint.html)

# Avaliando a veracidade de uma loja no Instagram com OSINT

<img width="50%" alt="image" src="https://github.com/rayanepimentel/InfoSec-iniciante/assets/37915359/4729366f-cb14-459f-900c-119a0d63ea5e">


<br>
<br>

**Ferramentas Utilizadas:**

- Instagram: [https://instagram.com/](https://instagram.com/)
- Site do Governo (Consulta de CNPJ): [https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/Cnpjreva_Solicitacao.asp](https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/Cnpjreva_Solicitacao.asp)
- Whois: [https://whois.domaintools.com/](https://whois.domaintools.com/)

## Cenário: 

Uma amiga me pediu ajuda para indentificar se uma loja é confiável.
Ela me mandou o instagram da loja XPTO.

### Instagram

- 3 anos de vendas.
- Conta com uma quantidade significativa de seguidores, mas segue poucas pessoas.
- O perfil da loja inclui um link para o site oficial.

<img width="30%" alt="image" src="https://github.com/rayanepimentel/InfoSec-iniciante/assets/37915359/2b7a72f0-c74c-4b29-a857-f9cd1cf4888d">


Ao revisar os "Marcados", não foi possível encontrar nenhuma marcação.

<img width="30%" alt="image" src="https://github.com/rayanepimentel/InfoSec-iniciante/assets/37915359/7f576d3c-178e-455e-bd50-5ccb3a2b3d4a">

Muito estranho, tantos seguidores, 3 anos de mercado e ninguém comprou e marcou? 🤔

As ultimas fotos estão com comentários bloquea-dos

<img width="30%" alt="image" src="https://github.com/rayanepimentel/InfoSec-iniciante/assets/37915359/6f172b36-2490-4336-bba9-10f71b5dff7b">

E as fotos que estão com comentários, estão limitados, não consigo ve-los.

<img width="30%" alt="image" src="https://github.com/rayanepimentel/InfoSec-iniciante/assets/37915359/d80e0996-ffc8-40a1-90c7-c29663647dde">

<img width="30%" alt="image" src="https://github.com/rayanepimentel/InfoSec-iniciante/assets/37915359/0116ad54-9015-45d3-a2c2-11c80c675c95">

Analise do instagram: 

- Fotos com comentários bloqueados.
- Fotos que tem comentários estão limitados.
- Nenhuma marcação.

### Whois site

Ao acessar o site da loja, observei:

- O site apresenta uma variedade extensa de produtos, todos com desconto de 70%.
- O domínio é .com, diferente do esperado .br.
- Frete grátis para todo o Brasil.

Verifiquei o whois desse site no [http://whois.domaintools.com](http://whois.domaintools.com)

<img width="30%" alt="image" src="https://github.com/rayanepimentel/InfoSec-iniciante/assets/37915359/93f314e0-9df3-401a-95b2-9256b212bd53">


O site foi criado há menos de um mês, o que contrasta com a afirmação de 3 anos de vendas no Instagram. 🤔

Analise do site: 

- Site todo com 70% de desconto e com frete grátis
- Site não era .br e sim .com
- Site criado há menos de 1 mês

Fui no rotapé da pagina e peguei o CNPJ.

<img width="30%" alt="image" src="https://github.com/rayanepimentel/InfoSec-iniciante/assets/37915359/8c14d24a-3634-4580-896b-8e8701e61a9b">


### CNPJ

Entrei no site da governo [https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/Cnpjreva_Solicitacao.asp](https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/Cnpjreva_Solicitacao.asp), coloquei o CNPJ e pesquisei

<img width="30%" alt="image" src="https://github.com/rayanepimentel/InfoSec-iniciante/assets/37915359/ba6ba9b6-c7cc-4835-bfb0-bffb29f9fe23">

<img width="30%" alt="image" src="https://github.com/rayanepimentel/InfoSec-iniciante/assets/37915359/ebdb1e3c-8561-41ac-a5d3-850b718c1c47">


Menos de 1 mês que CNPJ foi aberto? Muito estranho 🤔

Clique em "Consultar QSA"

<img width="30%" alt="image" src="https://github.com/rayanepimentel/InfoSec-iniciante/assets/37915359/e869f64d-5750-44da-ac58-c49310c3a560">



Analise do CNPJ: 

- O CNPJ foi registrado há menos de um mês.
- A loja foi registrada com um capital inicial de 15k.
- Uma única pessoa como sócia.

### Resumo

| Dados Críticos Descobertos                                                                                                     |
|----------------------------------------------------------------------------------------------------------------------------------|
| Tempo de atividade do site: Menos de 1 mês                                                                                     |
| CNPJ registrado há menos de 1 mês                                                                                              |
| Site apresenta descontos de 70% em todos os produtos                                                                            |
| Limitação de comentários nas fotos do Instagram e ausência de marcações |


### Conclusão

Baseado na minha análise, concluo que o site da loja XPTO pode ser suspeito, possivelmente utilizado para fins de golpe. A criação recente do CNPJ e do site, o site com milhares de produtos com desconto atrativo e limitação de comentários nas fotos do Instagram e ausência de marcações, levantando questões sobre a legitimidade da atividade

<hr>

<a href="https://www.linkedin.com/shareArticle?mini=true&url=https://rayanepimentel.github.io/InfoSec-iniciante/site/ferramentas/osint/cenario1.html" target="_blank">Compartilhar no LinkedIn</a>


