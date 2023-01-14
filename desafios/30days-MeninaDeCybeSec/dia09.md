# Dia 9 - Bora pescar?

- Criar uma conta no Letsdefend e zerar a sala ‘Phishing Email Analysis’. 

É gratuito! Link: https://app.letsdefend.io/training/lessons/phishing-email-analysis

## Phishing

```js
Obviamente, o único objetivo do ataque não é roubar as informações de senha do usuário. O objetivo de tais ataques é explorar o fator humano, o elo mais fraco da cadeia. Os invasores usam ataques de phishing como o primeiro passo para se infiltrar nos sistemas. 
```
|Ataque| O que é| Protocolo| O que é/são| 
|-----:|-------|----------|--------|
|Email Spoofing|Ataque de email spoofing é quando acontece a falsificação de identidade por email através da alteração mal-intencionada do campo “De” do email, onde o usuário malicioso finge ser outra pessoa.|SPF, DKIM e DMARC|Descobrir se remetente é falso ou real.

### Análise de Tráfego de Email 

|Paramentro| Exemplo| 
|-----:|-------|
|Endereço do remetente| nome@dominio|
|Endereço IP SMTP| 127.0.0.1|
|base de domínio| @dominio|

- Ferramenta theHarvester(Kali Linux), usada para descobrir e-mails

```js
$ theharvester -d kali.org -l 500 -b google
# -d domino/nome da empresa a ser pesquisado. Ex: kali.org
# -l é o limitador. Ex: 500 (irá aparecer 500 resultados)
# -b é a fonte, onde vc quer busca essa informações. Ex: google/bing/linkedin/twitter...
# ou -b all irá procurar em todas as fontes

# Para salvar o resultados em um arquivo:
$ theharvester -d kali.org -l 500 -b google resultados.html 
```

### Cabeçalho de e-mail

```js
- O que é: "Cabeçalho" é basicamente uma seção do e-mail que contém informações como remetente, destinatário e data.
- O que ele faz: Permite a identificação do remetente e do destinatário. "De" e "Para"
```

#### Como saber se o e-mail foi falsificado?

```js
- O e-mail foi enviado do servidor SMTP correto?
- Os dados "From" e "Return-Path / Reply-To" são os mesmos? 
```

1. Verificando servidor SMTP

Ao "visualizar a mensagem original" do e-mail, em "Received" temos a informação do servidor:

```js
Received: from hostname [IP Adrress]
```
Para verificarmos usamos o mxtoolbox.com na opção MX Lookup, passando o domínio na pesquisa. E olhamos tanto o hostname como o IP Adrress, se realmente é igual o do "Received".

Se for diferente o e-mail não veio do endereço original, ou seja foi falsificado.

2. Verificando "From" e "Return-Path / Reply-To"

```js
- Sempre verificar se o "From" e "Reply-To", possuem o mesmo e-mail e/ dominio.
```

### Static Analysis

Você recebeu um e-mail e ao passar o mouse em um link, vc viu que era diferente. Por exemplo, você recebeu um e-mail do seu banco pedindo para vocie fazer o login na URL: fakeBank.com e ao passar o mouse, você viu outra URL: virus.fakeBanck.com/infectado, provavelmente nessa possibilidade você não irá clicar. E irá diretamente no site no seu fakeBank e fazer o login. 

Mas digamos que você recebeu um e-mail com uma promoção imperdivel, mas você ficou novamente desconfiado o link ao passar o mouse. E agora o que você pode fazer? Já que o link de algumas promoções não ficam visivel na pagína, são links feitos exclusivos para cliente. Você irá clicar? Mesmo não sabendo se é um link falso?

Você não precisa correr esse risco, basta copiar o link suspeito e verificar em uns dos buscadores de antivírus, que detectam se é um ataque de phishing. Um desses buscadores é o [virustotal](https://www.virustotal.com/gui/home/upload). 


Outra analise que podemos fazer é pelo endereço de IP, utilizando o "Cisco Talos Intelligence". O Talos detecta a reputação do IP e ele esse IP foi incluindo em uma lista "maliciosa", se estiver o ataque foi feito em um servidor comprometido.

```js
Da mesma forma, o endereço SMTP pode ser pesquisado no VirusTotal e no AbuseIPDB para determinar se o endereço IP esteve envolvido anteriormente em atividades maliciosas. 
```

![dia 08](./pics/dia09.png)