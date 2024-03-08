👾 [Inicio](https://rayanepimentel.github.io/InfoSec-iniciante/) | [Cronograma](https://rayanepimentel.github.io/InfoSec-iniciante/cronograma/) | [Cursos](https://rayanepimentel.github.io/InfoSec-iniciante/cursos/) | [Security For Developers](https://rayanepimentel.github.io/InfoSec-iniciante/cursos/Security-for-developers/)

# Directory traversal

É uma vulnerabilidade que permite que o invasor tenha acesso a arquivos arbitrários no servidor que está executando um aplicativo. 
O invasor consegue acessar documentos do diretório raiz.

Um ataque bem sucedido, o atacante pode ter controle total do servidor.

![image](https://github.com/rayanepimentel/InfoSec-iniciante/assets/37915359/2fd1ca7b-6783-41f4-aff2-9b573075a771)

## Exemplo de um ataque

Exemplo de código de um site que exibe arquivos de imagens:

```php
<?php
$img = $_GET['img'];

include('var/www/images/' . $img);
?>
```

Ao acessarmos `www.site.com/view?img=logo.png` é exibido o logo. <br>

Mas invasor usa o param `img` para acessar arquivos restrito:

`www.site.com/view?img=../../etc/passwd`

A consulta ficará assim:

```php
<?php
$img = '../../etc/passwd';

include('var/www/images/' . $img);
?>
```

Permite que o invasor visualize o arquivo:

```bash
root:!:0:0::/:/usr/bin/ksh
daemon:!:1:1::/etc:
bin:!:2:2::/bin:
sys:!:3:3::/usr/sys: 
adm:!:4:4::/var/adm:
uucp:!:5:5::/usr/lib/uucp: 
guest:!:100:100::/home/guest:
nobody:!:4294967294:4294967294::/:
lpd:!:9:4294967294::/:
lp:*:11:11::/var/spool/lp:/bin/false 
invscout:*:200:1::/var/adm/invscout:/usr/bin/ksh
nuucp:*:6:5:uucp login user:/var/spool/uucppublic:/usr/sbin/uucp/uucico
paul:!:201:1::/home/paul:/usr/bin/ksh
jdoe:*:202:1:John Doe:/home/jdoe:/usr/bin/ksh 
```


## Mitigação

- Validação de entrada
- Evite usar entrada do usuário para operações de arquivos
- Bloqueio de directory traversal sequences (../)
- Bloqueio de chars ou URL-encoding. Exemplo: `%2e%2e%2f` representa `../`;
- Princípio de privilégio mínimo
- Testes de segurança regulares
  


## Leitura

- [https://portswigger.net/web-security/file-path-traversal](https://portswigger.net/web-security/file-path-traversal)
- [https://owasp.org/www-community/attacks/Path_Traversal](https://owasp.org/www-community/attacks/Path_Traversal)
- [https://gitbook.ganeshicmc.com/web/semana-1/04_directory_traversal](https://gitbook.ganeshicmc.com/web/semana-1/04_directory_traversal)

<br>
<hr>
<br>

[< Anterior](13-vulnerable-components.md) | [Próxima >](15-logging-vuln.md)
