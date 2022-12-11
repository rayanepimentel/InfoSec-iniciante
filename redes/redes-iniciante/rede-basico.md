# Parte I

1. Protocolos de rede
2. Modelo OSI e TCP/IP

## 1. Protocolos de rede

```aside
Protocolos de Rede (TCP, UDP, RTP, DCCP, SCTP, SSH, NNTP etc);
```

### O que são procotocolos de rede e para que servem?

Protocolos de rede são os conjuntos de normas que permitem que duas ou mais máquinas conectadas à internet se comuniquem entre si. Funciona como uma linguagem universal, que pode ser interpretada por computadores de qualquer fabricante, por meio de qualquer sistema operacional.

Eles são responsáveis por pegar os dados transmitidos pela rede e dividi-los em pequenos pedaços, que são chamados de pacotes. Cada pacote carrega em si informações de endereçamento de origem e destino. Os protocolos também são responsáveis pela sistematização das fases de estabelecimento, controle, tráfego e encerramento.

Existem três elementos-chave que definem os protocolos de rede. São eles:

    sintaxe: representa o formato dos dados e a ordem pela qual eles são apresentados;
    semântica: refere-se ao significado de cada conjunto sintático que dá sentido à mensagem enviada;
    timing: define uma velocidade aceitável de transmissão dos pacotes.

Fonte/Citação: [opservices](https://www.opservices.com.br/protocolos-de-rede/)

### Tipos de protocolos de rede

Os tipos de protocolos de rede são divididos de acordo com a sua natureza do serviço disponibilizado. E também em qual camada de profundidade estão localizados na rede de internet.

Essas camadas, junto com alguns exemplos de protocolos, são:

- **Camada de Aplicação**: Usada pelos programas para enviar e receber dados de outros programas pela própria internet.
  - WWW (navegação web), HTTP, SMPT (emails), FTP (transferência de arquivos) e SSH. 
- **Camada de Transporte**: Para transporte de arquivos recebidos da camada anterior. Aqui acontece a organização e a transformação deles em pacotes menores, que serão enviados à rede.
  - TCP, UDP e SCTP.
- **Camada de Rede**: Os arquivos empacotados na camada anterior são recebidos e anexados ao IP da máquina que envia e que recebe os dados. Daqui, são enviados pela internet usando a próxima camada.
  - IP (IPv4 e IPv6).
- **Camada de Estrutura Física**: É a camada que executa o recebimento ou envio de arquivos na web.
  - Ethernet e Modem.

Fonte/Citação: [weblink](https://www.weblink.com.br/blog/tecnologia/conheca-os-principais-protocolos-de-internet/)

**1. IP**

O protocolo IP, do termo em inglês Internet Protocol (Protocolo de Internet) faz parte da camada de internet e é um dos protocolos mais importantes da web. Ele permite a elaboração e transporte dos pacotes de dados, porém sem assegurar a sua entrega.

O destinatário da mensagem é determinado por meio dos campos de endereço **IP** (endereço do computador), **máscara de sub rede** (determina parte do endereço que se refere à rede) e o campo **gateway** estreita por padrão (permite saber qual o computador de destino, caso não esteja localizado na rede local).

**1.1 IP, máscara de sub rede e gateway**

O endereço de IP, parece como o endereço da nossa casa.
Para recebemos coisas/pacotes dos correrios, precisamos informar o endereço da nossa casa.

E o IP precisa identificar o dispositivo para enviar e mandar coisas/pacotes.
Justamente pq o IP é um procolo usado para identificar dispositivos e conexões.

Descobrindo endereço de IP

```bash
#para linux:
$ ifconfig 
# ipconfig para windows
```

Como você já deve saber, o **IP é o endereço do dispositivo na web**. Explicando-o didaticamente, trata-se de uma sequência numérica que rotula o computador, permitindo a sua identificação quando está online.

Já a **máscara de rede** é utilizada para definir a quantidade de endereços IP pertencentes à rede, concedendo um IP único a cada dispositivo integrado a ela, dividindo-os em sub-redes.

E o gateway é o roteador/model/wifi. A saída p internet.

Gateway, vem do inglês e significa “portão de entrada”. Uma definição que deixa muito claro o seu propósito: servir como um elo entre dois pontos. Sendo assim, é possível notar que usamos o gateway o tempo todo quando nos conectamos à internet.

Pense nisso: em sua casa, para se conectar à rede, você precisa de um dispositivo como um smartphone ou um notebook. Porém, não basta apenas ligar o aparelho, você precisa conectá-lo a um roteador Wi-Fi, via cabo ou pelas redes móveis, pois só assim poderá começar a navegar e adquirir informações.

Essas três opções(wifi, cabo e rede móveis) funcionam como o portão principal que vai permitir que todos os dados (de ambos os lados) atravessem para alcançar seus destinos.

Fonte/Citação: [e-tinet](https://e-tinet.com/linux/ifconfig/) e [tecnoblog](https://tecnoblog.net/responde/o-que-e-gateway/)

1.2 IP interno e IP externo

O IP local (ou IP interno) identifica cada dispositivo individualmente. Ou seja, é o endereço atribuído pelo roteador à sua máquina na rede local.

Já o IP externo é a identificação que o seu provedor de internet forneceu para sua residência ou empresa. É pelo IP externo que o seu dispositivo consegue se conectar à rede mundial.

A principal diferença entre endereços IP externos e internos é o alcance e a que estão conectados. Um endereço IP externo te identifica na Internet, para que todas as informações que procura possam chegar a você. Um endereço IP interno é usado em uma rede privada para se conectar com segurança a outros dispositivos nessa mesma rede.

Fonte/Citação: [avast](https://www.avast.com/pt-br/c-ip-address-public-vs-private)

**Exemplo**:

![IP interno e Externo](/redes//redes-iniciante/pics/ipInternoExterno.png)

> Estou no meu notebook e quero me comunicar com o site www.google.com → O IP interno 192.168.0.109 do meu dispositivo envia a informação para o IP interno do roteador (gateway  192.168.0.1) → e o IP interno 192.168.0.1 envia para rede externa 216.58.192.5 → que faz a comunicação com a internet.
