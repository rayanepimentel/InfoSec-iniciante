# Decomposição da aplicacão


Link do canva para melhor visualização: [Canva - Modelagem de ameaça](https://www.canva.com/design/DAF9nm9HgJE/hrleeqIZqQrYostRDqRDbA/view?utm_content=DAF9nm9HgJE&utm_campaign=designshare&utm_medium=link&utm_source=editor)

![Canva - Modelagem de ameaça](https://github.com/rayanepimentel/InfoSec-iniciante/assets/37915359/be4a06e5-f726-4d74-a14a-b4a7d555ac16)


## Processo

Você precisa anotar o processo, as evidencias da sua modelagem de ameaça, que servirá para consulta e analise prosteriormente.

O que precisa ter nesse documento? 

### Informações do modelo de ameaça

Informações sobre a equipe e o projeto:

**Nome da Aplicação**: O nome da aplicação<br>
**Versão da aplicação**: versão da aplicação examinada <br>
**Descrição**: descrição detalhada da aplicação<br>
**Proprietário**: proprietário do documento de modelagem de ameaças<br>
**Participantes**: participantes envolvidos no processo de moldagem de ameaças para essa aplicação<br>
**Revisor**: revisor(es) do modelo de ameaça. <br>

### Dependências externas

São itens externos ao código da aplicação que podem representar uma ameaça a aplicação. 
Esses itens normalmente ainda estão sob o controle da organização, mas possivelmente não estão sob o controle da equipe de desenvolvimento. Precisa investigar dependências externas e o ambiente de produção e os requisitos. 

Esta fase de decompor a aplicação serve para mapearmos o que existe.

Incluir na documentação: 

- ID: ID exclusivo atribuído a dependência externa
- Descrição: descrição contextual da dependência externa

Ex: 

| | |
|--|--|
|ID	|Descrição|
|1	|O servidor web está protegido por um firewall e a única comunicação disponível é TLS|


### Pontos de entrada

Define as interfaces por meio das quais os invasores podem interagir com a aplicação.
Os pontos de ataques de uma aplicação podem ser em camadas. Ex: cada pag da web em uma aplicação web pode conter múltiplos pontos de entrada.

* Pontos de entrada: Onde os dados entram no sistema? 
* Pontos de saída: Onde os dados saem no sistema?

> Quando nos referimos a um lugar em que um usuário pode interagir, chamamos isso de Ponto de Entrada

Os pontos de entrada e saída definem um limite de confiaça.

- ID: ID exclusivo ao ponto de entrada. Será usado para cruzar o ponto de entrada com quaisquer ameaças ou vulnerabilidades encontradas. 
- Nome: nome descritivo que identifica o ponto de entrada e sua finalidade
- Descrição: descrição contextual detalhando a interação ou processamento que ocorrer no ponto de entrada
- Níveis de confiança: o nível de acesso exigido no ponto de entrada. Esses serão cruzados com os níveis de confiança definidos posteriormente no documenta.

Ex:

| | | | |
|--|--| -- | --|
|ID	  |Nome             |Descrição   |	Níveis de confiança|
1.2.1| Função de login	|Função de login aceita credenciais fornecidas pelo usuário e as compraram com as do banco de dados Usuário com credenciais de login válidas. |(2) Usuário com credenciais de login válidas. (3) Usuário com credenciais de login inválidas (4) Usuário ADM|


### Pontos de saída

Ativos

O sistema deve ter algo que interesse o invasor; esses itens ou áreas são definidos como ativos.

* Ativos são alvos do atacantes - razão pela qual as ameaças existirão.
    * Ativos físicos - informações pessoais
    * Ativos abstratos - reputação da empresa

- ID: exclusivo, será usado para crear o ativo com quaisquer ameaças ou vulnerabilidades identificadas.
- Nome: nome que identifica claramente o alvo
- Descrição: descrição contextual do que é o ativo e pq ele precisa ser protegido
- Níveis de confiança: o nível de acesso necessário para acessar o ponto de entrada está documentado aqui. Estes serrano cruzados com os níveis de confiança definidos na próxima etapa.


| | | | |
|--|--| -- | --|
|ID	|Nome	|Descrição	|Níveis de confiança|
|1	|Acesso ao servidor de banco de dados	|O acesso ao servidor de banco de dados permite administrar o banco de dados, dando-lhe acesso total aos usuários do banco de dados e a todos os dados contidos no banco de dados.|	Administrador do servidor de banco de dados.|


### Níveis de confiança

Os níveis de confiança representam os direitos de acesso que a aplicação concederá a entidades externas. Os níveis de confiança são cruzados com os pontos de entrada e ativos. Isso permite-nos definir os direitos de acesso ou privilégios necessários em cada ponto de entrada e aqueles necessários para interagir com cada ativo.

ID: Exclusivo e atribuído a cada nível de confiança. 
Nome: nome descritivo que permite identificar as entidades externas as quais foi concedido esse nível de confiança
Descrição: descrição textual do nível de confiança detalhando a entidade externa a quem foi concedido o nível de confiança.

| | | |
|--|--| --|
|ID	|Nome	|Descrição|
|1	|Usuário anonimo da web	|Um usuário que se conectou ao site, mas não forneceu credenciais válidas|


### Diagramas de Fluxo de Dados

A decomposição da aplicação tem como objetivo entender a aplicação e como ela interage com entidades externas. Isso é alcançado por meio de coleta e documentação de informações, utilizando uma estrutura claramente definida para garantir a coleta correta das informações


