# Level 02

Nesse nível é passado:

```bash
Username: natas3
Password: G6ctbMJ5Nb4cbFwhpMPSvxGHhQ7I6W8Q
URL:      http://natas3.natas.labs.overthewire.org
```

|   |   |   
|---|---|
| **Objetivo:**  |  Descobrir a senha pro próximo nivel |  

## Desafio

## Desafio

- Fiz login com as informações acima e a primeira coisa que eu fiz foi especionar o código e tinha esse comentário:

` No more information leaks!! Not even Google will find it this time... `

- Com esse comentário eu fui no `/robots.txt`, pq eu fui no robots.txt?

```md
O arquivo "robots.txt" é um arquivo de texto utilizado pelos mecanismos de busca da web para determinar quais partes de um site devem ser rastreadas ou ignoradas
```

E me retornou:

```txt
User-agent: *
Disallow: /s3cr3t/
```


|   |   |   
|---|---|
| `User-agent: *`         |  significa que as instruções a seguir se aplicam a todos os robôs de mecanismos de busca. |  
| `Disallow: /s3cr3t/`    |  indica que o acesso aos arquivos e diretórios dentro de "/s3cr3t/" não deve ser rastreada pelos robôs. |



- Sabendo disso, acessei o diretório `/s3cr3t/` e retornou um arquivo `users.txt`
- Ao abrir o arquivo encontrei a senha pro level-04.


|  |  |
|--|--|
|**Senha**| tKOcJIbzM4lTs8hbCmzn5Zr4434fGZQm |