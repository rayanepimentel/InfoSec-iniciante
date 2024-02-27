[Inicio](https://rayanepimentel.github.io/InfoSec-iniciante/) | [Cronograma](https://rayanepimentel.github.io/InfoSec-iniciante/site/cronograma/cronograma.html) | [OWASP](https://rayanepimentel.github.io/InfoSec-iniciante/OWASP/owasp.html)

# Boas práticas de códigos

Para criar esse guia usei como base **OWASP Secure Coding Practices** e **OWASP Cheat Sheets**


- [Segurança de entrada e saída de dados](#1-segurança-de-entrada-e-saída-de-dados)
- [Segurança de autenticação e gerenciamento de acesso](#2-segurança-de-autenticação-e-gerenciamento-de-acesso)
- [Error handling and logging](#3-error-handling-and-logging)

## 1. Segurança de entrada e saída de dados:

### 1.1 → **Validação de entrada de dados**

Sempre valide e sanitize todas as entradas de dados vindas dos usuários ou de fontes externas para prevenir ataques de Injeção de SQL, Cross-Site Scripting (XSS) e outros.

A validação de entrada deve ser aplicada tanto no **nível sintático** quanto **no nível semântico.**

- **A validação sintática** deve reforçar a sintaxe correta dos campos estruturados (por exemplo, SSN, data, símbolo de moeda).
- **A validação semântica** deve reforçar a correção de seus *valores* no contexto de negócios específico (por exemplo, a data de início é anterior à data de término, o preço está dentro do intervalo esperado).

<aside>
💡 → Nunca confie de forma alguma na entrada do usuário. 
→ Validar e rejeitar as entradas é melhor do que sanitizá-las.

Leia mais [aqui](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html), [aqui](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/README) e [aqui](https://portswigger.net/burp/documentation/desktop/testing-workflow/input-validation)

</aside>

### 1.2 → **Output encoding**

Sempre valide dados em um sistema confiável(ou seja, o servidor), codifique todos os caracteres, a menos que sejam considerados seguros e sanitize a saída de dados não confiáveis usando comandos do sistema operacional.

A codificação de saída (output encoding) é uma técnica eficaz para prevenir ataques de Cross-Site Scripting (XSS), que é um dos principais tipos de ataques que podem ser prevenidos por meio dessa prática de segurança.

 
 💡 Leia mais [aqui](https://cheatsheetseries.owasp.org/cheatsheets/Web_Service_Security_Cheat_Sheet.html#output-encoding) e [aqui](https://portswigger.net/web-security/cross-site-scripting/preventing#encode-data-on-output)


## 2. Segurança de autenticação e gerenciamento de acesso:

### 2.1 → **Autenticação e Gerenciamento de Credenciais**

A autenticação refere-se à validação das informações fornecidas pelo usuário, como nome de usuário e senha, para garantir que correspondam às credenciais corretas e autorizar o acesso ao sistema.

O gerenciamento de credenciais abrange atividades relacionadas ao armazenamento seguro e à proteção das informações de autenticação dos usuários, como senhas, chaves de acesso ou certificados digitais. Isso envolve a implementação de práticas de segurança, como a criptografia, para evitar o acesso não autorizado a essas informações.

Todas as medidas de autenticação devem ser implementadas em um sistema confiável, o que normalmente é o servidor onde o backend da aplicação está em execução.

- **Use um protocolo de transmissão seguro:**  as senhas devem ser transmitidas por um protocolo seguro, como HTTPS, para evitar a interceptação por invasores.
- **As senhas salt e hash:**  devem ser salted e hashed antes de armazená-las no banco de dados.
- **Armazenar senhas em local seguro:**  As senhas devem ser armazenadas em local seguro com acesso restrito.
- **Monitorar tentativas de senha:**  as organizações devem monitorar senhas com falha para detectar e prevenir ataques de força bruta.


💡 Veja sobre: [Dicas sobre armazenamento de senha](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#Use_a_cryptographically_strong_credential-specific_salt), [Dicas de autenticação](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html) e [Autenticação e gerenciamento do ciclo de vida](https://pages.nist.gov/800-63-3/sp800-63b.html).



### 2.2 → Gerenciamento de Sessão

O gerenciamento de sessões refere-se ao processo seguro de lidar com várias solicitações de um único usuário ou entidade em um aplicativo ou serviço baseado na web. Durante uma sessão, que consiste em várias solicitações e transações, um usuário é autenticado para acessar o sistema. O gerenciamento de sessões envolve a troca de informações secretas com usuários autenticados, tornando as comunicações de rede criptografadas essenciais para garantir a segurança do processo.

Boas práticas:

- **Definir sinalizadores Secure/HttpOnly em seus cookies**
- **Gerar novos cookies de sessão**
    - Um novo cookie sempre deve ser gerado a cada login do usuário.
    - O cookie também deve expirar se a conta ficar inativa por um longo período de tempo e forçar o usuário a se autenticar novamente.
    - O cookie anterior deve ser destruído imediatamente mesmo que não tenha expirado e nunca reutilizado.
- **Configurar cookies de sessão corretamente**
    - Os tokens de sessão devem ser longos, imprevisíveis e exclusivos.
    - Use o param “expire” para forçar o encerramento periódico da sessão como um maneira de evitar o sequestro de sessão.


💡 Veja sobre: [Dicas de gerenciamento de sessão](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)



### 2.3 → **Access control**

No contexto das aplicações web, o controle de acesso depende da autenticação e gerenciamento de sessões:

- **A autenticação** identifica o usuário e confirma que ele é quem diz ser.
- **O gerenciamento de sessão** identifica quais solicitações HTTP subsequentes estão sendo feitas por esse mesmo usuário.
- **O controle de acesso** determina se o usuário tem permissão para realizar a ação que está tentando realizar.

Broken Access Control ocorre quando um usuário pode ter acesso e executar ações que não lhe são atribuídas.

Exemplo: temos uma aplicação com dois tipos de usuários, `admin` e `comum`. O usuário `admin` pode excluir e editar qualquer usuário `comum`, enquanto o `comum` só realiza ações na sua própria conta. A falha acontece quando o usuário `comum` tem as mesmas ações do usuário `admin`, resultando em falha de escalação de privilégios.

Boas práticas:

- Princípio do privilégio mínimo
- Negar por padrão
- Validar permissões em todas solicitações
- Princípio de defesa em profundidade
- Evite controle de acesso baseado em funções


💡 Veja sobre [Broken Access Control](https://owasp.org/Top10/A01_2021-Broken_Access_Control/), [Cheat Sheets](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html), [PortSwigger](https://portswigger.net/web-security/access-control), [Project Proactive Controls c7 enforce access controls](https://owasp.org/www-project-proactive-controls/v3/en/c7-enforce-access-controls) e [ASVS V4-Access-Control](https://github.com/OWASP/ASVS/blob/master/4.0/en/0x12-V4-Access-Control.md)


## 3. **Error handling and logging**

### 3.1 **Error handling**

Verifique se a aplicação não exibe mensagens de erro que contenham dados sensíveis que possam auxiliar um atacante, incluindo ID de sessão, versões de software/framework e informações pessoais. Um dos riscos mais comuns relacionados ao tratamento inadequado de erros é o [Information Disclosure](https://portswigger.net/web-security/information-disclosure), que pode revelar informações confidenciais para usuários não autorizados.

Boas práticas:

- Não divulgue informações confidenciais em respostas de erro, incluindo detalhes do sistema, ID de sessão ou informações de conta
- Implemente mensagens de erro genéricas e use páginas de erro personalizadas

### 3.2 Logging

Logging é essencial para a segurança do código, permitindo aos desenvolvedores monitorar e detectar incidentes de segurança. Práticas adequadas de logging envolvem capturar informações relevantes, como interações do usuário e erros, para análise posterior. Isso ajuda a identificar comportamentos suspeitos e rastrear a causa de erros, facilitando a correção de bugs e a resposta a possíveis ataques. É importante seguir práticas recomendadas, como definir uma estrutura clara de logs e proteger informações confidenciais.

Boas práticas:

- Restrinja o acesso aos logs apenas a usuários autorizados
- Não armazene informações confidenciais em logs, incluindo informações desnecessárias detalhes do sistema, ID de sessão ou senhas
- Use níveis apropriados de logging: Utilize diferentes níveis de logging (como DEBUG, INFO, WARNING, ERROR) para registrar informações com base na sua importância. Isso permite filtrar e priorizar os logs conforme necessário.
- Faça log de exceções

<aside>
💡 Veja sobre Error handling and logging: 

- [OWASP - Security Logging and Monitoring Failures](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)
- [OWASP Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)
- [OWASP Error Handling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Error_Handling_Cheat_Sheet.html)
- [OWASP ASVS - V7: Error Logging](https://github.com/OWASP/ASVS/blob/master/5.0/en/0x15-V7-Error-Logging.md)

</aside>