# Dia 7 - OWASP é 10!

- Link: https://youtu.be/fsGluS9FIMQ](https://youtu.be/fsGluS9FIMQ). 
- Caso você já tenha assistido, escreva em poucas linhas o que você entende por Cross-site Scripting e mande aqui no canal.

## 07/30 :white_check_mark:

## Série OWASP Top 10 - 7/10 Cross-site Scripting XSS. Código Seguro

### Cross-site Scripting XSS

```js
- O que é: Permitir que seja executado outros script em seu site/pagina/codigo, que você não trata na sua aplicação.
- O que pode acontecer: Hacker pode executar código na sua página, código abritário dentro do seu servidor, da sua infra.
- Como acontece: Ex: Tem um formulário na sua pagina e o hacker injectar um alert() que pega os cookies da página. 
```

#### Três tipos principais



| Modelo   |      Descrição | De onde vem?|
|----------|:-------------:|--------------:|
|Reflected|Menos prejudicial, mais comum que o XSS stored. Isso ocorre quando a entrada do usuário não é sanitizada e pode ser exibida na página. O script é incorporado a um link e só é ativado quando o link é clicado. | Onde o script malicioso vem da solicitação HTTP atual. |
|Stored|Também chamado de XSS persistente. A entrada do usuário, por exemplo, script malicioso, é armazenada no banco de dados back-end. O ataque stored exige apenas que a vítima visite a página da Web comprometida | Onde o script malicioso vem do banco de dados do site. |
|DOM |O mais raro do XSS, mas pode ter sérias repercussões. Processa dados de uma fonte não confiável. A carga maliciosa altera o DOM no navegador da vítima. Refere-se a ataques nos quais o script malicioso modifica o ambiente DOM no navegador do usuário e faz com que o código do lado do cliente contido na página da Web seja executado de maneira diferente.| Onde a vulnerabilidade existe no código do lado do cliente em vez do código do lado do servidor. |

[Lab - XSS](https://pentest-tools.com/blog/xss-attacks-practical-scenarios)