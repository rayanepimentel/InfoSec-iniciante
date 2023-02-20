# Lab Portswigger

[Labs](https://portswigger.net/web-security/all-labs)

## SQL Injection

### 1. Lab: Recuperando dados ocultos 
**SQL injection vulnerability in WHERE clause allowing retrieval of hidden data**

O era um site onde listava algumas coisas, você poderia lista por: 
> All, Accessories, Corporate gifts, Food & Drink e Lifestyle.

Não tinha um campo de "Busca", então analisei o código e vi que o HTML da pesquisa erra assim:

```html
<a href="/filter?category=Accessories">Accessories</a>
```

Editei o HTML e no lugar de "Accessories" coloquei **' OR 1=1--**

```html
<a href="/filter?category=' OR 1=1--">Accessories</a>
```

E lab resolvido!

### 2. Lab: Subvertendo a lógica do aplicativo 
É quando temos um login que verifica usuário e senha, com a seguinte consulta:

```sql
SELECT * FROM users WHERE username = 'wiener' AND password = 'bluecheese'
```
Ou seja, se passar usuario e senha corretos, o login será bem sucedido, caso contrário retornar com falha no login.

Nesse exemplo, podemos fazer login apenas sabendo o usuário por exemplo, colocando usuario --(comentário em SQL), com isso remove a verificar de senha do WHERE.

Exemplo: 

```sql
SELECT * FROM users WHERE username = 'administrator'--' AND password = ''
```

Tudo após **administrador** será considerado com comentário e não verificará a condição da senha.

- Lab: Fazer login com a conta **administrator**

Na rota **/account**, tinha um form com username e password, olhei o HTML e ambos eram obrigatórios.

Username: **administrator' OR 1=1--** </br>
Password: **.**</br>

A senha como era obrigatória, tive que colocar algum coisa na verificação e tudo o que tinha no campo senha foi considerado comentário.</br>

Login com sucesso!

### 3. Lab: Recuperando dados de outras tabelas de banco de dados

Os invasores podem usar **UNION** para executar uma função adicional na consulta **SELECT**. E assim recuperar dados de outras tabelas no banco de dados.

Exemplo de consulta:

```sql
SELECT name, description FROM products WHERE category = 'Gifts'
```

Digamos que o invasor queira retornar todos usuarios e senhas, poderia ser feito assim:

```sql
' UNION SELECT username, password FROM users--
```

Fazendo isso retorna todos usuários e senhas com a descrição dos produtos.

- Lab: SQL injection UNION attack, determining the number of columns returned by the query

Para resolver o laboratório, determine o número de colunas retornadas pela consulta executando um ataque UNION de injeção de SQL que retorna uma linha adicional contendo valores nulos.

