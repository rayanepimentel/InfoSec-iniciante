# Pipeline DAST

## Contexto

Se você não sabe o que é pipeline, DAST, Workflow e Github Actions, eu escrevi sobre [aqui](pipeline.md).

### Dast usado no exemplo

- Fonte: [OWASP ZAP](https://github.com/marketplace/actions/zap-baseline-scan)

## Implementação:

### GitHub Actions

- No seu projeto no GitHub, vá em "Actions" e clique em "set up a workflow yourself" ou procure por "Simple workflow".
- Isso abrirá um arquivo YAML.

### Configurando workflow

### Eventos:

- Vamos criar os eventos:

```yaml
name: OWASP ZAP
on:
  schedule:
    - cron: '0 6 * * *'
```
Nesse exemplo eu quero que todos os dias em um horario X, seja feita uma análise do projeto. <br>
Para isso vou usar o CronJob, o que é um CronJob? 

Utilizando cronJobs conseguimos agendar tarefas individuais para um horário específico, como por exemplo análise do site seja feita em um horário que não tenha tantos usuários online. Também podemos agendar para que seja feita mais de uma vez por dia. Veja mais [aqui](https://kubernetes.io/pt-br/docs/concepts/workloads/controllers/cron-jobs/)

No exemplo <strong>'0 6 * * *'</strong> indica que a tarefa será executada todos os dias às 6:00 da manhã baseada no horário UTC (Tempo Universal Coordenado).

Sintaxe do cronograma cron

```bash

# ┌───────────── minuto (0 - 59)
# │ ┌───────────── hora (0 - 23)
# │ │ ┌───────────── dia do mês (1 - 31)
# │ │ │ ┌───────────── mês (1 - 12)
# │ │ │ │ ┌───────────── dia da semana (0 - 6) (domingo a sábado;
# │ │ │ │ │                                 7 também representa domingo em alguns sistemas operacionais)
# │ │ │ │ │
# │ │ │ │ │
# * * * * *

```
> O editor rápido e simples para expressões de agendamento cron [https://crontab.guru/](https://crontab.guru/)

### Trabalhos

- Agora vamos definir os trabalhos

```yaml
jobs:
  dast:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout código
        uses: actions/checkout@v2
      - name: Executar OWASP ZAP
        uses: zaproxy/action-baseline@v0.7.0
        with:
          target: https://voluntariamos.netlify.app/
```

- O nome do job será "dast".
- Irá rodar na máquina virtual Ubuntu.
- Etapas:
    1. Checkout código:
    - A primeira etapa é chamada "Checkout código" e usa a ação "actions/checkout@v2". Essa etapa é responsável por fazer o checkout do código-fonte do repositório no qual o trabalho está sendo executado.
    2. Executar OWASP ZAP:
    - A segunda etapa é chamada "Executar OWASP ZAP" e usa a ação "zaproxy/action-baseline@v0.7.0". Essa etapa é responsável por executar o OWASP ZAP. 
    - Possui um parâmetro chamado "with" que contém as configurações específicas para a execução do OWASP ZAP. 
    - Neste exemplo, o parâmetro "target" é definido como "https://voluntariamos.netlify.app/", indicando que esse é o endereço do aplicativo a ser testado.


Aqui está a configuração final do meu arquivo YAML:

```yaml
name: OWASP ZAP Cron Job
on:
  schedule:
    - cron: '0 6 * * *'
jobs:
  dast:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout código
        uses: actions/checkout@v2
      - name: Executar OWASP ZAP
        uses: zaproxy/action-baseline@v0.7.0
        with:
          target: https://voluntariamos.netlify.app/
```

Essa programação garanti que a análise seja executada no horário especificado.

Depois da análise feita com sucesso, você pode conferir em Actions  

<img src="./img/actions.png" alt="quadro" width="800">

Você receberá uma Issue chamada "ZAP Scan Baseline Report" contendo uma descrição das vulnerabilidades encontradas.

<img src="./img/reportDast.png" alt="quadro" width="800">
