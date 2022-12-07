# Introdução a redes e varreduras de portas usando Namp

# 1.1 Reconhecimento

 **Reconhecimento** é o processo de aquisição de informações sobre um alvo.  Esse alvo  pode ser um computador, uma rede ou uma futura vítima de um  [ataque](https://www.codecademy.com/resources/docs/general/cyberattack) de engenharia social. O reconhecimento pode ser passivo ou ativo, dependendo de como ele adquire informações.

## **Active vs Passive Reconnaissance**

### Active

*O reconhecimento ativo*  envolve interagir ativamente com o alvo.

→ O **objetivo** é coletar informações sobre aquele dispositivo ou outros dispositivos que estejam conectados a ele na mesma rede.

→ O reconhecimento ativo pode ser usado para **descobrir** informações como portas abertas/fechadas, o sistema operacional de uma máquina, os serviços em execução, captura de banner, descoberta de novos hosts ou localização de aplicativos vulneráveis em um host.

Examples of active reconnaissance include:

- Host enumeration
- Network enumeration
- User enumeration
- Group enumeration
- Network share enumeration
- Web page enumeration
- Application enumeration
- Service enumeration
- Packet crafting

### Passive

*O reconhecimento passivo* NÃO envolve interagir ativamente com o alvo.  Em vez de enviar pacotes para um servidor, um hacker pode observar o tráfego que o servidor envia e recebe, em vez de enviar o tráfego por conta própria.

Geralmente a coleta passiva de informações usa recursos públicos que possuem informações sobre esse alvo. O uso de recursos públicos para coletar informações é chamado de inteligência de código aberto (OSINT).  Usando o OSINT, você pode coletar coisas como endereços IP, nomes de domínio, endereços de e-mail, nomes, nomes de host, registros de DNS e até mesmo qual software está sendo executado em um site e seus [CVEs associados](https://www.redhat.com/pt-br/topics/security/what-is-cve).

Examples of passive reconnaissance include:

- Domain enumeration
- Packet inspection
- Open-source intelligence (OSINT)
- Recon-ng
- Eavesdropping

### Diferenças

A principal diferença entre reconhecimento cibernético ativo e passivo são os métodos que eles usam para coletar informações.  

As ferramentas de reconhecimento ativo interagem diretamente com os sistemas para coletar informações no nível do sistema, enquanto as ferramentas de reconhecimento passivo dependem de informações disponíveis publicamente.  

Como resultado, as ferramentas de reconhecimento ativo tendem a coletar informações mais úteis, mas correm o risco de alertar o proprietário da máquina sobre suas atividades.

## **Preforming Active Reconnaissance**

→ **Enumeração** **externa dos hosts: ajudará a identificar os sistemas que estão mais expostos.

<aside>
💡 Identificar hosts acessíveis → Descobrir serviços expostos → *verificação de porta → varreduras de porta*

</aside>

Verificação de porta **é um método para determinar quais portas de uma rede estão abertas e podem receber e enviar dados**. Esse também é um processo para envio de pacotes a portas específicas em um host e análise de respostas para identificar vulnerabilidades.

Varredura de porta, também conhecida com análise de porta ou escaneamento de porta, **é o nome dado à técnica usada para identificar o estado de uma porta em uma rede**. O principal objetivo dessa técnica é encontrar portas abertas e, dessa forma, uma vulnerabilidade na rede ou sistema.

# 1.2 **Introdução ao Nmap**

```bash
#instalação
sudo apt install nmap -y 

#verificar versão
nmap -V

#saída semelhante
Nmap version 7.80 ( https://nmap.org )
Platform: x86_64-pc-linux-gnu

#ajuda
Nmap -h

#Nmap Cheat Sheet https://h4cker.org/cheat/nmap.
curl https://h4cker.org/cheat/nmap
```

# 1.3 **Escaneamento TCP com Nmap**

Seis diferentes estados de porta que são reconhecidos pelo Nmap:

`aberto(open)`, `fechado(closed)`, `filtrado(filtered)`, `não-filtrado(unfiltered)` , `open|filtered`, ou `closed|filtered`

| Estado | Explicação |
| --- | --- |
| aberto(open) | Um serviço que aceita pacotes TCP, UDP, SCTP. |
| fechado(closed) | Uma porta sem serviço ativo recebendo solicitações. |
| filtrado(filtered) | Não é possível diferenciar porque os pacotes estão sendo filtrados e impedindo que as sondas cheguem à porta. |
| não-filtrado(unfiltered)  | O estado não-filtrado significa que uma porta está acessível, mas que o Nmap é incapaz de determinar se ela está aberta ou fechada. |
| open|filtered | Não é possível determinar entre Aberto ou Filtrado e ocorre quando as portas abertas normalmente não fornecem uma resposta. |
| closed|filtered | Não é possível determinar entre Fechado ou Filtrado. |

## **Estabelecendo uma conexão TCP**

→ Handshake de Três Vias TCP

1. O  **cliente** **enviará** ao **servidor** uma solicitação "**SYN**", "pedindo" o estabelecimento de uma conexão.  
2. Uma vez que o **servidor** tenha **processado** a resposta, uma resposta "**SYN-ACK**" será **enviada** de **volta** ao **cliente**, reconhecendo que foi recebida.
3. O **cliente responde** com um "**ACK**" e, uma vez recebido pelo servidor, a comunicação é estabelecida.

![Imagem](http://www.bosontreinamentos.com.br/wp-content/uploads/2015/10/handshake-tres-vias-TCP-esquema.jpg)

Imagem: [http://www.bosontreinamentos.com.br/redes-computadores/curso-de-redes-protocolo-tcp-handshake-de-tres-vias/](http://www.bosontreinamentos.com.br/redes-computadores/curso-de-redes-protocolo-tcp-handshake-de-tres-vias/)

Chamamos esse processo de Handshake de três Vias ( Three-Way Handshake).
 Neste caso, o host que envia o primeiro segmento SYN realiza o que  chamamos de uma **abertura de conexão ativa**. Já o outro host, em nosso exemplo o servidor que recebe o segmento SYN, realiza uma **abertura de conexão passiva**.

<aside>
💡 O Nmap usa esse handshake para verificar quais portas estão abertas.

</aside>

## **Verificação de conexão TCP (-sT)**

O *TCP Connect Scan* usa o handshake TCP completo de 3 vias para estabelecer uma conexão com um host e ver quais portas estão abertas, filtradas ou fechadas. Uma  porta é filtrada se não houver resposta do host;  geralmente bloqueado por um firewall.

<aside>
💡 Esse tipo é utilizado quando não é possível usar o TCP SYN. A diferença entre esses dois é que, no TCP Connect, ao receber um SYN/ACK indicando porta aberta, o sinal de RST não é enviado, mas sim um ACK, estabelecendo uma conexão com a porta.

</aside>

### varredura de conexão TCP

```bash
$ nmap -sT enderecoIPDestino/container

$ nmap -sT 10.0.0.5
Starting Nmap 7.80 ( https://nmap.org ) at 2021-08-06 23:44 UTC
Nmap scan report for 10.0.0.5
Host is up (0.00025s latency).
Not shown: 997 closed ports
PORT   STATE SERVICE
22/tcp open  ssh
53/tcp open  domain
80/tcp open  http
MAC Address: 02:42:0A:00:00:05 (Unknown)

Nmap done: 1 IP address (1 host up) scanned in 0.17 seconds
```

Foi encontrado 3 portas open/abertas. A porta 80 está executando um
serviço HTTP, a porta 22 está executando um servidor ssh e a porta 53
está executando um serviço DNS.

```bash
$ nmap -sT -p 80 10.0.0.5
# nmap é o comando para iniciar o aplicativo nmap
# -sT é a varredura TCP
# -p mapeia as 100 primeiras portas
# 80 é a porta

Starting Nmap 7.80 ( https://nmap.org ) at 2022-12-05 22:31 UTC
Nmap scan report for 10.0.0.5
Host is up (0.000060s latency).

PORT   STATE SERVICE
80/tcp open  http
MAC Address: 02:42:0A:00:00:05 (Unknown)

Nmap done: 1 IP address (1 host up) scanned in 0.12 seconds
```

| Status | Resposta | Análise |
| --- | --- | --- |
| Abrir | TCP SYN-ACK | O serviço está escutando na porta. |
| Fechadas | TCP RST | O serviço não está escutando na porta. |
| filtrado | Nenhuma resposta do alvo | A porta é protegida por firewall. |

### **Varredura TCP SYN (-sS)**

O uso da varredura de conexão TCP não é eficiente e pode ser detectado por um sistema de detecção de intrusão (IDS).

<aside>
💡 É enviado um pacote SYN tentando abrir uma conexão. Se for recebido uma resposta SYN/ACK significa que a porta está ouvindo e caso seja recebido um RST como resposta, a porta não estará ouvindo.

</aside>

1. Você envia um pacote SYN para abrir uma conexão real e aguarda a resposta.
2. A  **resposta SYN/ACK**  indica que a  **porta está escutando (aberta)**. Enquanto  **RST(reset)**  indica que a porta de destino é um  **não ouvinte**. Se  **nenhuma resposta for recebida após várias retransmissões**  ou  **um erro ICMP inacessível**  for recebido, a  **porta será marcada como filtrada .**
3. Se você receber um SYN/ACK do sistema de destino, envie  **um pacote ACK para concluir o handshake triplo.**
4. Como não temos nada a dizer no momento, enviamos  **RST**  para  **encerrar a comunicação.**
5. Por fim, se nenhuma resposta foi enviada após algumas tentativas, a porta é decidida como filtrada.

![Image](https://miro.medium.com/max/1400/1*ceQbjtIperSJEW_f1SQrMQ.webp)

Image: [https://koayyongcett.medium.com/lesson-5-network-vulnerability-and-scanning-tcp-connect-scan-d24ae7099cfd](https://koayyongcett.medium.com/lesson-5-network-vulnerability-and-scanning-tcp-connect-scan-d24ae7099cfd)

Qual é a principal diferença entre o TCP SYN e o TCP Connect? A principal diferença entre esses dois tipos de varredura é que **ao ser recebido uma resposta SYN/ACK do servidor, o TCP SYN envia um RST para que a conexão não seja completada, já o TCP Connect manda um ACK
que estabelece a conexão**.

```bash
$ nmap -sS 10.0.0.5
Starting Nmap 7.80 ( https://nmap.org ) at 2022-12-05 23:31 UTC
Nmap scan report for 10.0.0.5
Host is up (0.0000080s latency).
Not shown: 994 closed ports
PORT    STATE SERVICE
21/tcp  open  ftp
22/tcp  open  ssh
53/tcp  open  domain
80/tcp  open  http
139/tcp open  netbios-ssn
445/tcp open  microsoft-ds
MAC Address: 02:42:0A:00:00:05 (Unknown)

$ nmap -sS -p 1-100 10.0.0.5
Starting Nmap 7.80 ( https://nmap.org ) at 2022-12-05 23:31 UTC
Nmap scan report for 10.0.0.5
Host is up (0.000020s latency).
Not shown: 96 closed ports
PORT   STATE SERVICE
21/tcp open  ftp
22/tcp open  ssh
53/tcp open  domain
80/tcp open  http
MAC Address: 02:42:0A:00:00:05 (Unknown)

$ nmap -sS -p 80 10.0.0.5
Starting Nmap 7.80 ( https://nmap.org ) at 2022-12-05 23:31 UTC
Nmap scan report for 10.0.0.5
Host is up (0.000057s latency).

PORT   STATE SERVICE
80/tcp open  http
MAC Address: 02:42:0A:00:00:05 (Unknown)

Nmap done: 1 IP address (1 host up) scanned in 0.19 seconds
```

| Status | Resposta | Análise |
| --- | --- | --- |
| Abrir | TCP SYN-ACK | O serviço está escutando na porta. |
| Fechadas | TCP RST | O serviço não está escutando na porta. |
| filtrado | Nenhuma resposta do destino ou destino ICMP inacessível | A porta é protegida por firewall. |

## **Varredura TCP FIN (-sF)**

Se uma varredura SYN ou TCP Connect foi detectada por um firewall, você pode usar uma varredura TCP FIN.  Esse tipo de varredura envia um pacote FIN para uma porta de destino e espera um pacote RST de volta. Se a porta estiver aberta, ela teria ignorado o pacote FIN; no entanto, se a porta estiver fechada, um pacote RST será enviado.

<aside>
💡 As varreduras TCP Fin não são eficazes contra sistemas baseados no Windows, pois responderão com pacotes RST, independentemente do estado.

</aside>

```bash
$ nmap -sF -p 80 10.0.0.5
Starting Nmap 7.80 ( https://nmap.org ) at 2022-12-05 23:41 UTC
Nmap scan report for 10.0.0.5
Host is up (0.000047s latency).

PORT   STATE         SERVICE
80/tcp open|filtered http
MAC Address: 02:42:0A:00:00:05 (Unknown)

Nmap done: 1 IP address (1 host up) scanned in 0.39 seconds

$ nmap -sF -p 1-100 10.0.0.5
Starting Nmap 7.80 ( https://nmap.org ) at 2022-12-05 23:42 UTC
Nmap scan report for 10.0.0.5
Host is up (0.000012s latency).
Not shown: 96 closed ports
PORT   STATE         SERVICE
21/tcp open|filtered ftp
22/tcp open|filtered ssh
53/tcp open|filtered domain
80/tcp open|filtered http
MAC Address: 02:42:0A:00:00:05 (Unknown)

Nmap done: 1 IP address (1 host up) scanned in 1.41 seconds
$ nmap -sF -p 80 10.0.0.5
Starting Nmap 7.80 ( https://nmap.org ) at 2022-12-05 23:42 UTC
Nmap scan report for 10.0.0.5
Host is up (0.000067s latency).

PORT   STATE         SERVICE
80/tcp open|filtered http
MAC Address: 02:42:0A:00:00:05 (Unknown)

Nmap done: 1 IP address (1 host up) scanned in 0.40 seconds
```

| Status | Resposta | Análise |
| --- | --- | --- |
| filtrado | Erro ICMP inacessível recebido | A porta fechada deve responder com RST. |
| Fechadas | pacote RST recebido | A porta fechada deve responder com RST. |
| Aberto/Filtrado | Nenhuma resposta recebida | A porta aberta deve descartar FIN. |

## 1.4 **Escaneamento UDP com Nmap**

O UDP é um protocolo comum entre os serviços que podem lidar com a perda de pacotes, como streaming, consultas de DNS e DHCP.

### Varredura UDP (-sU)

Ao enviar um pacote UDP, ele espera por um certo tempo uma resposta. Quando a resposta não chega, supõe-se que a porta está aberta ou filtrada. Na presença de firewall o scan pode retornar “aberta”, sendo que está filtrada.

Se uma mensagem ICMP inacessível for recebida do destino, a porta será marcada como fechada. Caso não haja resposta, será marcada como aberta/filtrada.

```bash
#Para iniciar uma varredura UDP, digite o seguinte:

$ nmap -sU 10.0.0.5
#Pode demorar um pouco. Pressione Enter para ver o status em qualquer ponto.
UDP Scan Timing: About 93.91% done; ETC: 00:03 (0:01:04 remaining)
Nmap scan report for 10.0.0.5
Host is up (0.00011s latency).
Not shown: 999 closed ports
PORT   STATE SERVICE
53/udp open  domain
MAC Address: 02:42:0A:00:00:05 (Unknown)

Nmap done: 1 IP address (1 host up) scanned in 1083.74 seconds

$ nmap -sU -p 53 10.0.0.5
Starting Nmap 7.80 ( https://nmap.org ) at 2022-12-06 00:05 UTC
Nmap scan report for 10.0.0.5
Host is up (0.00016s latency).

PORT   STATE SERVICE
53/udp open  domain
MAC Address: 02:42:0A:00:00:05 (Unknown)

Nmap done: 1 IP address (1 host up) scanned in 0.20 seconds
```

| Status | Resposta | Análise |
| --- | --- | --- |
| Abrir | Dados retornados da porta | O serviço está escutando na porta. |
| Fechadas | Mensagem de erro ICMP recebida | O serviço não está escutando na porta. |
| Aberto/Filtrado | Nenhuma resposta ICMP do destino | A porta está protegida por firewall ou atingiu o tempo limite. |

## 1.5 **Varredura de descoberta de host**

Nos casos em que você precisa listar todos os hosts disponíveis em uma rede, o Host Discovery Scan seria ideal.

### **Varredura de descoberta de host (-sn)**

```bash
$ nmap -sn 10.0.0.5
Starting Nmap 7.80 ( https://nmap.org ) at 2022-12-06 00:06 UTC
Nmap scan report for 10.0.0.5
Host is up (0.000042s latency).
MAC Address: 02:42:0A:00:00:05 (Unknown)
Nmap done: 1 IP address (1 host up) scanned in 0.10 seconds

#Os intervalos também podem ser passados para o comando 
#anexando o intervalo de sub-rede:
$ nmap -sn 10.0.0.0/24
#O seguinte mostra que ambos os contêineres (10.0.0.05, 10.0.0.06) 
#estão ativos e acessíveis:
Starting Nmap 7.80 ( https://nmap.org ) at 2022-12-06 00:06 UTC
Nmap scan report for 10.0.0.5
Host is up (0.000011s latency).
MAC Address: 02:42:0A:00:00:05 (Unknown)
Nmap scan report for 10.0.0.6
Host is up (0.000012s latency).
MAC Address: 02:42:0A:00:00:06 (Unknown)
Nmap scan report for host01 (10.0.0.1)
Host is up.
Nmap done: 256 IP addresses (3 hosts up) scanned in 2.03 seconds
```

# 1.5 *Nmap Scripting Engine*

O Nmap Scripting Engine permite aos usuários criar scripts que automatizam as funções básicas do Nmap. O Nmap então executa esses scripts em paralelo tornando o processo muito mais eficiente.

Há diversos scripts prontos do próprio NMAP. Veja a lista de scripts:
<https://nmap.org/nsedoc/scripts/>

Você pode escrever o seu próprio script:
<https://nmap.org/book/nse-tutorial.html>

`nmap -sC` executa uma varredura com script usando os scripts na categoria padrão.
Ou se você desenvolveu scripts personalizados, `--script`.

```bash
nmap -sC scanme.nmap.org
```

1. Verificação de atividade do alvo na rede;
2. Listagem de portas abertas, fechadas e filtradas associadas ao nome do serviço que tradicionalmente utiliza cada porta, caso o alvo esteja ativo; e
3. Saídas dos scripts que tiveram suas condições de execução satisfeitas e, por isto, foram executados pelo NSE

## Características

O Nmap possui scripts integrados para cada um dos itens a seguir e muito mais!

- Enumeração do usuário
- Enumeração de grupo
- Enumeração de Compartilhamento de Rede
- Enumeração de serviço
