👾 [Inicio](https://rayanepimentel.github.io/InfoSec-iniciante/site/) | [Cronograma](https://rayanepimentel.github.io/InfoSec-iniciante/cronograma/) | [DevSecOps](https://rayanepimentel.github.io/InfoSec-iniciante/devSecOps)

# Pipeline 

## Contexto

### 1. O que é pipeline

- Fonte: [https://www.redhat.com/pt-br/topics/devops/what-cicd-pipeline](https://www.redhat.com/pt-br/topics/devops/what-cicd-pipeline) e [https://blog.convisoappsec.com/implementando-uma-ci-cd-pipeline-garantindo-a-qualidade-e-a-seguranca-do-software/](https://blog.convisoappsec.com/implementando-uma-ci-cd-pipeline-garantindo-a-qualidade-e-a-seguranca-do-software/)
- Um pipeline, no contexto do desenvolvimento de software, refere-se a uma série de etapas ou estágios pelos quais as alterações de código passam antes de serem implantadas em produção. Cada estágio no pipeline representa uma tarefa específica, como a construção do código, a execução de testes, a análise de segurança e a implantação em diferentes ambientes.

### 2. O que é Workflow

- Fonte: [https://docs.github.com/en/actions/quickstart](https://docs.github.com/en/actions/quickstart)
- Um fluxo de trabalho (workflow) refere-se à sequência de etapas ou tarefas que precisam ser realizadas para concluir um processo ou projeto específico. No desenvolvimento de software, um fluxo de trabalho geralmente inclui tarefas como codificação, teste, revisão e implantação.
- Ele é definido a partir de um arquivo YAML dentro da pasta `.github/workflows`.

### 3. O que é SAST

- Fonte: [https://www.zup.com.br/blog/ferramentas-ssdlc](https://www.zup.com.br/blog/ferramentas-ssdlc)
- SAST (Teste de Segurança Estático) é uma técnica de teste de segurança usada em um pipeline de CI/CD. O SAST analisa o código-fonte em busca de vulnerabilidades conhecidas e práticas inseguras. Esses testes de segurança ajudam a identificar e corrigir problemas de segurança antes que o software seja implantado em produção, garantindo que o aplicativo seja seguro e protegido contra ameaças.

### 4. O que é DAST

- Fonte: [https://www.zup.com.br/blog/ferramentas-ssdlc](https://www.zup.com.br/blog/ferramentas-ssdlc)
- DAST (Dynamic Application Security Testing) é um processo de teste de segurança que examina um aplicativo em execução para encontrar vulnerabilidades e identificar possíveis pontos de entrada para ataques. Ao contrário do SAST (Static Application Security Testing), que analisa o código-fonte em busca de vulnerabilidades, o DAST simula ataques reais, permitindo identificar falhas de segurança que só podem ser detectadas quando o aplicativo está em execução.

### 5. O que é GitHub Actions

- O GitHub Actions ajuda a automatizar tarefas dentro do ciclo de vida de desenvolvimento de software. Saiba mais em [aqui](https://docs.github.com/pt/actions) e [aqui](https://curso-r.github.io/rladies-GYN-github-actions/#31)


## Entendendo o workflow

- **Eventos**: Um evento é uma atividade que aciona um fluxo de trabalho. Por exemplo, sempre que você faz um push ou quando uma solicitação de pull request é feita.

- **Trabalhos**: Um trabalho é uma unidade de trabalho que precisa ser executada em resposta a um evento. Pode ser uma tarefa simples, como processar um arquivo de dados, ou um processo mais complexo, como executar um fluxo de trabalho completo.

Exemplo:

<img src="./img/exemploEventosJobs.png" alt="eventos e jobs" width="400">

**Eventos:** 

O evento sempre é acionado quando ocorre um push para o branch "main" ou quando há uma solicitação de Pull request para o branch "main".

**Trabalhos:**

- **Jobs:** É o nome do trabalho, que neste exemplo é "build".
- **Runs-on:** Indica que o trabalho "build" será executado em uma máquina virtual com o sistema operacional Ubuntu mais recente. Isso significa que todas as etapas definidas dentro desse trabalho serão executadas nesse ambiente específico.
- **Etapas (steps):** As etapas são as unidades de trabalho individuais dentro de um trabalho (job). Cada etapa representa uma tarefa específica que precisa ser executada como parte do processo de construção, teste ou implantação do software.
    - Ao usar a palavra-chave "**uses**" em uma etapa, você pode especificar a ação a ser executada e, se necessário, fornecer argumentos adicionais para personalizar o comportamento da ação. Exemplo:
        - **uses: actions/checkout@v3:** Essa etapa usa a ação "checkout" para clonar o repositório do projeto. Essa etapa é responsável por obter o código-fonte do projeto para que ele possa ser usado nas etapas subsequentes.
    - "**name**" é usada para atribuir um nome a uma etapa (step) específica. O nome é opcional e serve para identificar e descrever a etapa de forma mais clara e legível.
<br>
<hr>
<br>

[Próxima >](https://rayanepimentel.github.io/InfoSec-iniciante/devSecOps/pipeline-sast.html)