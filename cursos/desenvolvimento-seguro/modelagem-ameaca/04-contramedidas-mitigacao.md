# Determinar Contramedidas e Mitigação

> Após a identificação e classificação das ameaças, são definidas contramedidas específicas para mitigar cada uma delas. Isso pode incluir a implementação de medidas de segurança, como autenticação forte, criptografia de dados e validação de entrada 

<img width="338" src="image-25.png">

## Contramedidas e Mitigação

Em [Determinar Ameaças](03-determinarAmeaca.md), usmaos o modelo STRIDE e identificamos algumas vulnerabilidades:

| Ameaça | Controle | Descrição | Mitigação |
|--------|----------|-----------| --------- |
| Information disclosure(divulgação de informações) | Autorização | Informações sensíveis armazenadas no Banco de Dados podem ser divulgadas se não forem protegidas adequadamente.| 1. Identificação de Dados Sensíveis; 2. Criptografia de Dados em Trânsito e em Armazenamento; 3. Uso de Mensagens de Erro Genéricas|

<img width="500" src="image-27.png">


Para cada vulnerabilidade identificada, é necessário documentar as estratégias de mitigação para a equipe de desenvolvimento implementar.

Depois de mitigada é só alterar o status:

<img width="500" src="image-30.png">
<img width="420" src="image-31.png">

