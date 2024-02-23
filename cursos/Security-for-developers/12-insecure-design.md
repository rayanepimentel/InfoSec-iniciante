# Insecure design

## Leitura
- https://knowledge-base.secureflag.com/vulnerabilities/security_misconfiguration/insecure_design_vulnerability.html
- https://www.hacksplaining.com/prevention/insecure-design
- https://owasp.org/Top10/pt_BR/A04_2021-Insecure_Design/
- https://dev.to/gabogaldino/explicando-o-top-4-da-owasp-design-inseguro-para-desenvolvedores-4lf0
- https://blog.convisoappsec.com/design-segundo-samm-modelagem-de-ameacas-em-seguranca-de-aplicacoes/
- https://blog.convisoappsec.com/design-segundo-samm-requisitos-de-seguranca-em-seguranca-de-aplicacoes/
- https://blog.convisoappsec.com/arquitetura-segura-em-seguranca-de-aplicacoes-segundo-samm/

<img width="1296" alt="image" src="https://github.com/rayanepimentel/InfoSec-iniciante/assets/37915359/ec5bfed3-b043-43b9-b40b-2e2e73e05f9d">

## Cenário

O cenário mostra uma vulnerabilidade de  design inseguro, onde um atacante explora falhas no sistema de controle  de acesso e manipulação de sessão para ganhar controle sobre o sistema.

<img width="1296" alt="image" src="https://github.com/rayanepimentel/InfoSec-iniciante/assets/37915359/92963cce-d2a2-47a0-95d9-f57e46ea5de6">


|  |  |
|--|--|
|Impacto	|Mitigação|
|**Falhas de Design e Arquitetura**: A vulnerabilidade de design inseguro pode levar a falhas funcionais, violações de dados, políticas quebradas e reputação danificada.	|**Modelagem de Ameaças**: Identificar e analisar ameaças e vulnerabilidades desde o início do desenvolvimento para melhorar a segurança do código.|
|**Perda de Confiança dos Usuários**: A falta de práticas de segurança robustas pode resultar em uma perda de confiança dos usuários, afetando a utilização e a adoção do sistema.	|**Revisão de Design e Arquitetura**: Garantir que o design e a arquitetura do sistema sejam revisados e ajustados para incorporar práticas de segurança.|
|**Danos Financeiros e de Dados**: Atacantes podem explorar as vulnerabilidades para realizar transações fraudulentas ou acessar dados sensíveis, resultando em perdas financeiras e comprometimento de dados.| **Implementação de Controles de Acesso**: Implementar controles de acesso rígidos e verificar que eles sejam seguidos corretamente em todas as etapas do desenvolvimento.|
|**Comprometimento do Sistema**: Um design inseguro pode levar a um controle total do sistema por atacantes, permitindo ações não autorizadas.	|**Testes de Segurança**: Realizar testes de segurança abrangentes para identificar e corrigir vulnerabilidades antes do lançamento do sistema.|
