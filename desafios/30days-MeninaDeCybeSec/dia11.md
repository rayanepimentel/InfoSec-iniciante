# Dia 11 - Análise de URL

- Analisar a URL ‘polkabridge[.]org’ e coletar suas principais informações: 

```js
IP, ASN, principais tecnologias utilizadas e o domínio principal. 
```

- Utilizar sites ou ferramentas de análise de URLs, exemplo Whois, para coletar essas informações. Seja criativo(a)!

[https://urlscan.io](https://urlscan.io)


|Nome| Valor|
|----:|------|
|IP (DNS A)| 95.179.203.230 (AS20473 - AS-CHOOPA, US)|
|ASN| AS20473|
|Tecnologias|nginx/1.18.0, Node.js, Bootstrap |
|OS |Ubuntu Linux|
|Domínio principal| polkabridge.org|
|Mail Provider| Amazon|
|Hosting Provider| Choopa, LLC|
|Protocols| 22/SSH , 80/HTTP , 443/HTTP |
|Certificado| TLS|
|DNS TXT - SPF| v=spf1 mx include:_spf.porkbun.com ~all v=spf1 include:_spf.porkbun.com ~all |

```js
- Foi localiado 28 IPs em 6 países em 24 domínios para realizar 146 transações HTTP. 
- O IP principal é 95.179.203.230, localizado em Londres, Reino Unido e pertence a AS-CHOOPA, EUA. 
- O domínio principal é polkabridge.org.
- Certificado TLS: Emitido por R3 em 21 de dezembro de 2022. Válido para: 3 meses. 
```


## DNS A: 

O A, também conhecido por hostname, é o registro central de um DNS, ele vincula um domínio ou subdomínio a um endereço IP direto. Os registros de DNS do tipo A são a razão final da existência do sistema de resolução de nomes, e o tipo de registros que dá nome ao serviço. O "A" significa "endereço" e este é o tipo de registro de DNSmais importante: ele indica o endereço de IP de um determinado domínio.

## ASN: 

Autonomous System Number ou Número de Sistema Autônomo – número que identifica o conjunto de IPs dos quais essa organização é dona -, que é crucial para identificar os sistemas e permitir as trocas de informações e rotas entre eles.

## DNS TXT - SPF: 

**O que é DNS TXT?** O registro TXT permite que um administrador de domínio deixe notas em um servidor de DNS. Atualmente, dois dos usos mais importantes para os registros DNS TXT são a prevenção contra spams de e-mail e a verificação de propriedade de domínios.

**O que é SPF?** Registros SPF são um tipo de registo DNS TXT usados geralmente para autenticação de e-mails. Os registros SPF incluem uma lista de endereços de IP e de domínios autorizados a enviar e-mails desse domínio. 

**Como um servidor de e-mail verifica um registro SPF?**

Os servidores de e-mail realizam um processo relativamente simples para verificar um registro SPF:

1. O Servidor 01 envia um e-mail. Seu endereço de IP é 192.0.2.0 e o return path utilizado pelo e-mail é email@returnpath.com. (Um endereço de return path é diferente do endereço do “de” e é utilizado especificamente para coletar e processar mensagens devolvidas).

2. O servidor de e-mail que está recebendo a mensagem (Servidor 02) usa o domínio do return path recebido e procura por seu registro SPF.

3. Se o Servidor 02 encontrar um registro SPF para o domínio do return path, irá procurar o registro SPF do endereço de IP do Servidor 01 em sua lista de remetentes autorizados. Se o endereço de IP estiver listado no registro SPF, o SPF é aprovado e o e-mail encaminhado. Se o endereço de IP não estiver listado no registro SPF, o SPF não é aprovado. Nesse caso, o e-mail será recusado ou marcado como spam. 

