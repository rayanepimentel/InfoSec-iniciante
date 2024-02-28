👾 [Inicio](https://rayanepimentel.github.io/InfoSec-iniciante/) | [Cronograma](https://rayanepimentel.github.io/InfoSec-iniciante/cronograma/) | [Cursos](https://rayanepimentel.github.io/InfoSec-iniciante/cursos/) | [Security For Developers](https://rayanepimentel.github.io/InfoSec-iniciante/cursos/Security-for-developers/)


# Prototype Pollution

## Leitura
- [Prototype Pollution](https://pt.stackoverflow.com/questions/449732/o-que-%C3%A9-prototype-pollution)
- [Hack tricks](https://book.hacktricks.xyz/v/portugues-ht/pentesting-web/deserialization/nodejs-proto-prototype-pollution)
- [PortSwigger](https://portswigger.net/web-security/prototype-pollution)
- [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Prototype_Pollution_Prevention_Cheat_Sheet.html)
- [Portswigger Daily](https://portswigger.net/daily-swig/prototype-pollution-the-dangerous-and-underrated-vulnerability-impacting-javascript-applications)

| | | |
|-|-|-|
|Mecanismos de Proteção Sugeridos|	Descrição| Exemplo
|Usar new Set() ou new Map()	|Evita a poluição de protótipos usando estruturas de dados que não permitem a alteração do protótipo global de objetos. |let allowedTags = new Set(); allowedTags.add('b'); if(allowedTags.has('b')){ //...} let options = new Map(); options.set('spaces', 1); let spaces = options.get('spaces').|
|Criar objetos com Object.create(null)|	Cria objetos que não herdam do protótipo global Object.prototype, reduzindo a possibilidade de poluição de protótipos. | let obj = Object.create(null);|
|Usar a propriedade __proto__ com cuidado	|Pode ser usado para criar objetos sem protótipo quando necessário, mas deve ser feito com extrema cautela. |let obj = {__proto__:null};|
|Métodos de "congelamento" e "selagem" de objetos	|Utilizar Object.freeze() e Object.seal() para impedir modificações nos protótipos dos objetos, embora possa quebrar a aplicação se bibliotecas dependentes modificarem os protótipos integrados.|
|Configuração de flag do Node.js --disable-proto=delete	|Remove completamente a propriedade __proto__, reduzindo a superfície de ataque e prevendo certos ataques. É uma medida defensiva em profundidade 

  

<br>
<hr>
<br>

[< Anterior](06-csrf.md) | [Próxima >](08-NoSQL.md)