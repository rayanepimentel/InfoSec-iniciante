# Pipeline SAST

## Contexto

### 1. O que é pipeline
- Fonte: [https://www.redhat.com/pt-br/topics/devops/what-cicd-pipeline](https://www.redhat.com/pt-br/topics/devops/what-cicd-pipeline)
- Um pipeline, no contexto do desenvolvimento de software, refere-se a uma série de etapas ou estágios pelos quais as alterações de código passam antes de serem implantadas em produção. Cada estágio no pipeline representa uma tarefa específica, como a construção do código, a execução de testes, a análise de segurança e a implantação em diferentes ambientes.

### 2. O que é SAST
- Fonte: [https://www.zup.com.br/blog/ferramentas-ssdlc](https://www.zup.com.br/blog/ferramentas-ssdlc)
- SAST (Teste de Segurança Estático) é uma técnica de teste de segurança usada em um pipeline de CI/CD. O SAST analisa o código-fonte em busca de vulnerabilidades conhecidas e práticas inseguras. Esses testes de segurança ajudam a identificar e corrigir problemas de segurança antes que o software seja implantado em produção, garantindo que o aplicativo seja seguro e protegido contra ameaças.

### 3. Workflow
- Fonte: [https://docs.github.com/en/actions/quickstart](https://docs.github.com/en/actions/quickstart)
- Um fluxo de trabalho (workflow) refere-se à sequência de etapas ou tarefas que precisam ser realizadas para concluir um processo ou projeto específico. No desenvolvimento de software, um fluxo de trabalho geralmente inclui tarefas como codificação, teste, revisão e implantação.
- Ele é definido a partir de um arquivo YAML dentro da pasta `.github/workflows`.

### 4. Sast usado no exemplo
- Fonte: [https://github.com/marketplace/actions/horusec](https://github.com/marketplace/actions/horusec)

## Implementação:

### Instalação do Horusec no projeto
1. A primeira etapa é criar o arquivo `horusec-config.json` do seu projeto. Siga a documentação [aqui](https://docs.horusec.io/docs/pt-br/cli/installation/).
2. Depois, faça o commit do arquivo.

### GitHub Actions
- O GitHub Actions ajuda a automatizar tarefas dentro do ciclo de vida de desenvolvimento de software. Saiba mais em [aqui](https://docs.github.com/pt/actions) e [aqui](https://curso-r.github.io/rladies-GYN-github-actions/#31)
- No seu projeto no GitHub, vá em "Actions" e clique em "set up a workflow yourself" ou procure por "Simple workflow".
- Isso abrirá um arquivo YAML.

> Antes disso vamos entender um pouco sobre esse workflow


### Entendendo o workflow
- **Eventos**: Um evento é uma atividade que aciona um fluxo de trabalho. Por exemplo, sempre que você faz um push ou quando uma solicitação de pull request é feita.
- **Trabalhos**: Um trabalho é uma unidade de trabalho que precisa ser executada em resposta a um evento. Pode ser uma tarefa simples, como processar um arquivo de dados, ou um processo mais complexo, como executar um fluxo de trabalho completo.

Exemplo:

<img src="./img/exemploEventosJobs.png" alt="eventos e jobs" width="400">

**Eventos:** O evento sempre é acionado quando ocorre um push para o branch "main" ou quando há uma solicitação de Pull request para o branch "main".

**Trabalhos:**
- **Jobs:** É o nome do trabalho, que neste exemplo é "build".
- **Runs-on:** Indica que o trabalho "build" será executado em uma máquina virtual com o sistema operacional Ubuntu mais recente. Isso significa que todas as etapas definidas dentro desse trabalho serão executadas nesse ambiente específico.
- **Etapas (steps):** As etapas são as unidades de trabalho individuais dentro de um trabalho (job). Cada etapa representa uma tarefa específica que precisa ser executada como parte do processo de construção, teste ou implantação do software.
    - Ao usar a palavra-chave "**uses**" em uma etapa, você pode especificar a ação a ser executada e, se necessário, fornecer argumentos adicionais para personalizar o comportamento da ação. Exemplo:
        - **uses: actions/checkout@v3:** Essa etapa usa a ação "checkout" para clonar o repositório do projeto. Essa etapa é responsável por obter o código-fonte do projeto para que ele possa ser usado nas etapas subsequentes.
    - "**name**" é usada para atribuir um nome a uma etapa (step) específica. O nome é opcional e serve para identificar e descrever a etapa de forma mais clara e legível.

### Configurar workflow

- Vamos criar os eventos:

```yaml
name: SecurityPipeline
on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]
```

- Agora vamos definir os trabalhos. Vamos usar a documentação do "Horusec": [https://github.com/marketplace/actions/horusec](https://docs.horusec.io/docs/pt-br/cli/installation/#github-actions)


```yaml
name: SecurityPipeline
on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]
Agora vamos definir os trabalhos. Vamos usar a documentação do "Horusec": https://github.com/marketplace/actions/horusec
yaml
Copy code
jobs:
  horusec-security:
    name: horusec-security
    runs-on: ubuntu-latest
    steps:
    - name: Check out code
      uses: actions/checkout@v2
      with: 
        fetch-depth: 0
    - name: Running Horusec Security
      run: |
        curl -fsSL https://raw.githubusercontent.com/ZupIT/horusec/main/deployments/scripts/install.sh | bash -s latest
        horusec start -p="./"
```
- O nome do job será "horusec-security".
- Irá rodar na máquina virtual Ubuntu.
- Etapas:
    - name: O que será usado para identificar a ação.
    - uses: Será a ação, como "actions/checkout@v2" para clonar o projeto.
    - with: Configurações adicionais para a ação "actions/checkout@v3".

- O primeiro comando utiliza o utilitário "curl" para fazer o download de um script de instalação do Horusec Security a partir do repositório GitHub da ZupIT. O script é executado usando o comando "bash" com o argumento "-s latest", que especifica a versão mais recente do Horusec Security a ser instalada.

- O segundo comando, "horusec start -p='./'", inicia a execução do Horusec Security no diretório atual ("./").

- Como estou usando o docker, preciso adicionar um **uses** para isso também.

Meu arquivo YAML ficou assim:

```yaml
name: SecurityPipeline

on:
#eventos
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
#trabalhos
  horusec-security:
    name: horusec-security
    runs-on: ubuntu-latest
    steps:
    - name: Check out code
      uses: actions/checkout@v2
      with: # Necessário quando habilitado o autores de commit
        fetch-depth: 0
    - name: Setup Docker
      uses: docker-practice/actions-setup-docker@v1
    - name: Running Horusec Security
      run: |
        curl -fsSL https://raw.githubusercontent.com/ZupIT/horusec/main/deployments/scripts/install.sh | bash -s latest
        horusec start -p="./"
```

Agora é só fazer o commit e subir esse arquivo yaml para master.

- Actions > clique no workflow 

<img src="./img/sastscan.png" alt="quadro" width="800">

Ao clicar em "Running Horusec Security", você verá a analise.

<img src="./img/relatorio.png" alt="relatorio" width="800">
