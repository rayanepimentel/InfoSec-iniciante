👾 [Inicio](https://rayanepimentel.github.io/InfoSec-iniciante/) | [Cronograma](https://rayanepimentel.github.io/InfoSec-iniciante/cronograma/) | [Cursos](https://rayanepimentel.github.io/InfoSec-iniciante/cursos/) | [Desenvolvimento Seguro](https://rayanepimentel.github.io/InfoSec-iniciante/cursos/desenvolvimento-seguro/)

# Coletar Informações

<img width="300" src="image-5.png">



Para iniciar a modelagem de ameaça, você precisa responder 4 perguntas:

    Em que estamos trabalhando?
    O que pode dar errado?
    O que você irá fazer a respeito disso?
    Fizemos um bom trabalho?



## O que você está construindo?

Podemos representar em forma de diagramas:

É uma aplicação web, que tem um servidor, uma lógica de negócio e um banco de dados.

<img width="500" alt="image" src="https://github.com/rayanepimentel/InfoSec-iniciante/assets/37915359/280ca9a4-a6e8-4650-89cf-b1858bf83888">


Depois começa as perguntas: 

    Esse site web é para toda internet ou é intranet? 
    o banco de dados tá hospedado em qual provedor? 
    ...

Depois de responder-las, você pode melhorar o seu diagrama. Você pode dividir em limites de confiança. 

    Server: interno (empresa)
    Database: externo (XPTO)


<img width="500" alt="image" src="https://github.com/rayanepimentel/InfoSec-iniciante/assets/37915359/cc451c39-19c9-4be6-af46-97284bfb6358">

## O que pode dar errado?

Com base no diagrama anterior, você começa a fazer perguntas sobre o que pode dar errado, o que não deveria acontecer.

    O que acontece se um usuário alterar um dado do banco de dados?
    Ao criar um login os dados são armazenados e criptgrafados? 

Ao responden-las, você terá uma lista de possíveis vulnerabilidades.

## O que você deve fazer em relação a essas coisas que podem dar errado?

Com uma lista de ameaças encontradas no passo anterior, o próximo passo é percorrer cada item e desenvolver estratégias para enfrentá-las. Para cada ameaça identificada, você tem a opção de adotar uma das quatro abordagens: **mitigar, eliminar, transferir ou aceitar**.

|Risco | Definição |
|------|-----------|
|**Mitigar**| É quando são tomadas ações para reduzir a probabilidade (de ocorrer) e/ou o (potencial) impacto negativo dela.| |
|**Eliminar**| É quando são tomadas ações para remover essa ameaça do projeto.| |
|**Transferir**| É quando o impacto dela é transferido/compartilhado para terceiros.| |
|**Aceitar** | É quando não é tomada nenhuma ação para lidar com ela. O custo para mitigar essa vulnerabilidade é alto e a probabilidade de ocorrer é baixa. | 

Exemplo de mitigação:

|Alvo | Estratégia de mitigação | Técnica de mitigação |
|-----|------------|-----------|
|Login(alguém se passando por outro usuário) | Identificação e autenticação de login(o sistema sabe/tem) | Senha, Tokens e MFA|
|Monitoramento de rede| Criptografia | HTTPS/SSL e IPsec |
|Segurança de Dados|Proteção de dados|Criptografia de dados, autenticação forte, firewalls|


## Fizemos um bom trabalho?

Analisando tudo o que foi feito, responda:


    Isso está completo?
    É preciso?
    Ele cobre todas as decisões de segurança que fizemos?
    Posso começar a próxima versão com este diagrama sem nenhuma mudança?

Se você respondeu todas sim, é porque o seu diagrama já pode ir para o próximo passo. Se não, você precisa atualiza-ló.

[< Anterior](00-modelagem.md) | [Próxima >](02-decomposicaoApp.md)
