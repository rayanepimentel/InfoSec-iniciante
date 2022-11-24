# Anatoções

## Dia 01 - Recon Scritps

Reconhecimento da aplicação.
É uma parte fundamental para encontramos vulnerabilidades. Quanto mais soubemos sobre a aplicação mas vulnerabilidades podemos encontramos.

O que podemos encontrar nessa etapa:

- Portas, IP, servidores em execução.
- Quais tecnologias existem no site.
- Mapear pasta, diretórios e rotas.

## Dia 02 - Análise e identificação de vulnerabilidades

Identificar → analisar → explorar

Na identificação do diretório **./git/**, foi feito Code Review e depois a exploração.

Vulnerabilidades encontradas:

- **IDOR** (Insecure Direct Object Reference) - Não verifica o usuário autenticado, permite acesso a conteúdo de outro usuário.
- **SSRF** (Server Side Request Forgery) - pode levar ao comprometimento do servidor e da rede do cliente.
- **Mass Assignment** - é possível editar qualquer campo no perfil do usuário.

**Desafio**: Explorar a vulnerabilidade IDOR

![flag desafio 02](/shw/pics/flag02.png)

## Dia 03 - Exploração / Invasão

Exploração a vulnerabilidade de SSRF e acesso a AWS.

**CSRF**: tentativa de falsificação de requisição.
Bloqueado pelo Laravel, que utiliza de duas validações:

- Cookie: **XSRF-TOKEN**
- **_token**, gerado randomicamente a cada novo post.

**Burp** suite: tentativa de falsificação de requisição.
Com o burp conseguimos realizar com sucesso:

- Listamos e alteramos campos do usuario. Alterando o tipo de usuário para usuário admin. Vulnerabilidade foi permitida porque não tinha restrição de campo que impeça a alteração do tipo de usuário.
- Acesso IAM. Como acesso ao IAM, conseguimos pegar o servidor atrelado ao perfil e as credenciais:

```bash
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_SESSION_TOKEN
```

**Acesso AWS**
Utilizamos AWS CLI, add as credenciais e realizamos uma chamada direita entre nós e AWS:

```bash
aws sts get-caller-identity #verifica se a chave tá funcionando e quem somos nós na AWS
```

Retornando:

```js
{
  UserId, 
  Account,
  Arn
}
```

Testamos o acesso ao S3

```bash
aws s3 ls
```

Retornando com sucesso.

**Desafio**: Encontrar a flag que tá no bucket em user-data.txt

**Solução**: Pesquisei como eu poderia copiar um arquivo do Bucket para a minha máquina.
Encontrei sobre o [CP](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/cp.html).

Basicamente eu chamaria o cp passando o Bucket com o . --recusive, assim eu copiaria tudo do Bucket para a minha máquina.</br>

Depois fiz um cat no arquivo user-data.txt, encontrando a flag.

![flag desafio 03](/shw/pics/flag03.png)
