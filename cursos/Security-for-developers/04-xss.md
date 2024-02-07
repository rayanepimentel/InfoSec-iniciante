# Cross-site scripting(XSS)

<img width="1067" alt="image" src="https://github.com/rayanepimentel/InfoSec-iniciante/assets/37915359/23655888-cb4c-4c7d-9a38-8467f2a77d5f">

## Tipos:

<img width="491" alt="image" src="https://github.com/rayanepimentel/InfoSec-iniciante/assets/37915359/70eaea7c-ca4a-475f-8dee-e510d3afe494">


## Reflected XSS

<img width="967" alt="image" src="https://github.com/rayanepimentel/InfoSec-iniciante/assets/37915359/51481c05-438f-4136-92fc-6402302042df">

## Stored XSS

<img width="1075" alt="image" src="https://github.com/rayanepimentel/InfoSec-iniciante/assets/37915359/d509e01e-4332-45aa-b61f-63377e2393a9">

## XSS DOM

<img width="1072" alt="image" src="https://github.com/rayanepimentel/InfoSec-iniciante/assets/37915359/5941d807-c6e2-4d1f-bb1e-092ddc5733cb">



## Mitigações

<img width="879" alt="image" src="https://github.com/rayanepimentel/InfoSec-iniciante/assets/37915359/2015ccea-d563-4c86-bb3d-9e369bd6a31b">

## Resumo:

Os ataques XSS podem ser organizados em duas categorias principais: **XSS baseado em servidor (Server XSS)** e **XSS baseado em cliente (Client XSS)**. Essa classificação ajuda a entender se a vulnerabilidade está no lado do servidor ou no lado do cliente (navegador do usuário).

- **Server XSS**: Ocorre quando dados fornecidos pelo usuário não confiáveis são incluídos na resposta HTTP gerada pelo servidor. A origem desses dados pode vir da solicitação ou de um local armazenado. Pode ser tanto XSS Refletido quanto XSS Armazenado (Stored) baseado em servidor.

- **Client XSS**: Ocorre quando dados fornecidos pelo usuário não confiáveis são usados para atualizar o DOM com uma chamada JavaScript insegura. Isso pode ser tanto XSS Refletido quanto XSS Armazenado (Stored) baseado em cliente.

<img width="979" alt="image" src="https://github.com/rayanepimentel/InfoSec-iniciante/assets/37915359/7336911a-b949-4172-b24c-419a628943d4">


| | | |
|--|--|--|
|Tipo de XSS|	Comunicação com o Servidor|	Descrição|
|Stored XSS (Persistent)|	Envia e Recebe	|O script malicioso é armazenado no servidor (como em um banco de dados) e é recuperado pela vítima quando acessa a página afetada. O navegador executa o script armazenado.|
|Reflected XSS|	Envia e Recebe	|O script malicioso é enviado para o servidor através de uma solicitação HTTP e é refletido de volta na resposta HTTP do servidor. O navegador executa o script refletido.|
|DOM-Based XSS|	Não envia/recebe|	O script malicioso é executado diretamente no navegador da vítima, sem a necessidade de comunicação com o servidor. Isso geralmente ocorre quando o script é injetado através de manipulações do DOM no lado do cliente.|


> Stored XSS: O script é armazenado no servidor e é enviado para o navegador da vítima quando ela acessa a página afetada. Isso significa que o servidor é tanto o remetente quanto o destinatário do script malicioso.

> Reflected XSS: O script é enviado para o servidor via uma solicitação HTTP e o servidor reflete o script na resposta HTTP. Nesse caso, o servidor é o remetente do script, e o navegador da vítima é o destinatário.

> DOM-Based XSS: O script é injetado diretamente no navegador da vítima através de manipulações do DOM, sem comunicação com o servidor. Portanto, nenhum dado é enviado ou recebido do servidor nesse tipo de ataque.


## Links
- https://portswigger.net/web-security/cross-site-scripting
- https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CSP
- https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html
- https://owasp.org/www-community/attacks/xss/#stored-and-reflected-xss-attacks
- https://owasp.org/www-community/Types_of_Cross-Site_Scripting
