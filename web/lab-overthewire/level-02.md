# Level 02

Nesse nível é passado:

```bash
Username: natas2
Password: h4ubbcXrWqsTo7GGnnUMLppXbOogfBZ7
URL:      http://natas2.natas.labs.overthewire.org
```

|   |   |   
|---|---|
| **Objetivo:**  |  Descobrir a senha pro próximo nivel |  
| **Dica:**      |  There is nothing on this page  |


## Desafio

- Fiz login com as informações acima e a primeira coisa que eu fiz foi especionar o código e descobri uma imagem

![imagem ponto](./img/imagem-level02-ponto.png)

- Cliquei na imagem e fui para endereço `http://natas2.natas.labs.overthewire.org/files/pixel.png` e a imagem era apenas um **.** (ponto), nada tão relevante até o momento, mas o que poderia ter além de pixel.png em `/files/`?

- Fui no caminho `http://natas2.natas.labs.overthewire.org/files/` e me retornou a imagem `pixel.png` e um arquivo `users.txt`

- Clique em `users.txt`e me retornou a senha do natas3

```txt
# username:password
alice:BYNdCesZqW
bob:jw2ueICLvT
charlie:G5vCxkVV3m
natas3:G6ctbMJ5Nb4cbFwhpMPSvxGHhQ7I6W8Q
eve:zo4mJWyNj2
mallory:9urtcpzBmH
```


|  |  |
|--|--|
|**Senha**| G6ctbMJ5Nb4cbFwhpMPSvxGHhQ7I6W8Q |