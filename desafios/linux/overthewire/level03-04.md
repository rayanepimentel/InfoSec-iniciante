# Desafios "overthewire"

Link: [https://overthewire.org/wargames/bandit][def]

[def]: https://overthewire.org/wargames/bandit

## Bandit Level 3 → Level 4

[https://overthewire.org/wargames/bandit/bandit4.html](https://overthewire.org/wargames/bandit/bandit4.html)

> Basicamente precisamos encontrar um arquivo oculto `.` que está no diretório `inhere`, arquivos ocultos começam com ponto `.`

Aqui precisamos logar no usuário bandit3, com a senha encontrada no desafio anterior.

```bash
$ ssh -p 2220 bandit3@bandit.labs.overthewire.org 
```
Ao listar os arquivos nesse diretório, encontramos o diretório `inhere`.

Para entramos nesse diretório vamos utilizar o comando `cd`, como vimos no [Level01](level00-01.md)

> - cd: O comando `cd` é usado para mudar o diretório atual. Ele permite que você navegue entre diferentes diretórios no sistema de arquivos. Por exemplo, você pode usar `cd /caminho/do/diretorio` para entrar em um diretório específico.

```bash
~$ cd inhere
~/inhere$ ls
[não retornou nada]
```

Ao digitar `ls` no diretório `inhere`, não retornou nenhum arquivo. Isso acontece pq o ls não lista arquivos ocultos, para listar arquivos ocultos podemos usar `ls -a`, mas existe outra formas também

```bash
~$ cd inhere
~/inhere$ ls -a
. .. .hidden
```

Agora vamos usar o cat

```bash
~/inhere$ cat .hidden
[retornou uma série de caracteres]
```

Essa série de caracteres será a senha utilizada para fazer login no próximo nível. Por favor, salve-a.

Desafio resolvido \o/


![senha b2](../img/senhab3.png)


