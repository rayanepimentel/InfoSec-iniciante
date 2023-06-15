# OS Command Injection
O estudo dessa vulnerabilidade foi realizado no dia 14/06/2023 no discord **Cantinho da Infosec**

**Como foi feito**: Compartilhamento de telas das participantes e a Kali mais a Erika ajudando com dúvidas e dicas durante o estudo.

## Anotações:

- Link: https://portswigger.net/web-security/os-command-injection
- Lab: https://portswigger.net/web-security/os-command-injection/lab-simple
- Leitura: https://owasp.org/www-community/attacks/Command_Injection

### O que é: 
É uma vulnerabilidade que permite o atacante executar comandos no sistema operacional.

### Objetivo:
Fazer uma execução de comandos arbitrários no sistema operacional host, por meio de uma aplicação vulnerável. 

### Como acontece: 

Isso acontece quando um atacante consegue manipular parâmetros em uma solicitação e injetar comandos arbitrários. Por exemplo, quando a entrada é passada diretamente para o backend sem sanitização adequada, um atacante pode usar técnicas de escapamento para inserir comandos maliciosos.

Ex:
https://insecure-website.com/stockStatus?productID=381&storeID=29

```py
https://insecure-website.com/stockStatus?productID=381&storeID=29
```

É passado diretamente para o backend sem sanitização. 

Consegue fazer escapamento de um comando para gerar outro. 

Escapamento = &, &&, |, ||, ; , `, $(command)


<code>productId=1&storeId=1</code>

script.py 1 1

productId=whoami&storeId=1

ex: script.py whoami 1 //precisa ser um comando, precisa fazer o escapamento, somente assim `whoami` não é reconhecido

productId={escapamento}whoami&storeId=1

ex: script {escapamento}whoami 1

{escapamento} = &, &&, |, ||, ; , ` ou $(command)

### Lab - simple case

https://portswigger.net/web-security/os-command-injection/lab-simple

Como resolver: Pense como é enviando para o backend, como o backend irá receber os param e como o `whoami` poderá ser reconhecido como commando na requisição.

### Como mitigar: 

- Sanitização de entradas 
- Escape de caracteres
    - Exemplo (nodejs): const `escapedFileName = fileName.replace(/['"]/g, ‘\\$&’);` realiza o escape dos caracteres especiais (aspas simples e aspas duplas). A expressão regular /['"]/g encontra todas as aspas simples e aspas duplas no nome do arquivo e o método replace adiciona uma barra invertida antes de cada uma delas.
- Usando listas para filtrar ou escapar caracteres especiais
    - Exemplos:
        - Windows: ( ) < > & * ‘ | = ? ; [ ] ^ ~ ! . ” % @ / \ : + , `
        - Linux: { } ( ) < > & * ‘ | = ? ; [ ] $ – # ~ ! . ” % / \ : + , `
  

