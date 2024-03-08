👾 [Inicio](https://rayanepimentel.github.io/InfoSec-iniciante/) | [Cronograma](https://rayanepimentel.github.io/InfoSec-iniciante/cronograma/) | [Cursos](https://rayanepimentel.github.io/InfoSec-iniciante/cursos/) | [Security For Developers](https://rayanepimentel.github.io/InfoSec-iniciante/cursos/Security-for-developers/)

# Logging vulnerabilities

**Logging** é o processo de criar logs de saída com base nas ações dentro de uma aplicação ou serviço, com a ideia de fornecer informações para entender possíveis problemas, como falhas ou problemas de desempenho. 

**Vulnerabilidades de logging** são simplesmente vulnerabilidades de segurança que surgem do processo de logging.

Níveis comuns de log:

    INFO: Eventos de negócios significativos e notáveis.
    WARN: Situações anormais que podem indicar problemas futuros.
    ERROR: Erros não recuperáveis que afetam uma operação específica.
    FATAL: Erros irrecuperáveis que afetam todo o programa.

Estrutura:

     [2023-11-03 08:45:33,123] ERROR: Database connection failed: Timeout exceeded.
     Nov  3 08:45:10 myserver kernel: USB device 3-2: new high-speed USB device number 4 using ehci_hcd
     ERROR:  relation "custome" does not exist at character 15

## Mitigação

- Não registre dados sensíveis
- Configurações de logging que restrinjam o acesso a arquivos de log
- Monitorização contínua dos sistemas de logging para detectar e responder a tentativas de exploração

## Leitura:

- [https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)
- [https://owasp.org/www-community/attacks/Log_Injection](https://owasp.org/www-community/attacks/Log_Injection)
- [https://betterstack.com/community/guides/logging/logging-best-practices/](https://betterstack.com/community/guides/logging/logging-best-practices/)
- [https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)

<br>
<hr>
<br>

[< Anterior](14-directory-traversal.md) | [Próxima >](16-ssrf.md)
