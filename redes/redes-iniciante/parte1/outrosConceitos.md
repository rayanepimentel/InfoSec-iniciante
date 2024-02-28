👾 [Inicio](https://rayanepimentel.github.io/InfoSec-iniciante/) | [Cronograma](https://rayanepimentel.github.io/InfoSec-iniciante/cronograma/) | [Bash e Redes](https://rayanepimentel.github.io/InfoSec-iniciante/cronograma/bashRedes) | [Redes](https://rayanepimentel.github.io/InfoSec-iniciante/redes/redes-iniciante/start.html) | [Rede parte I ](https://rayanepimentel.github.io/InfoSec-iniciante/redes/redes-iniciante/parte1/menu.html)

# Conceitos importantes

1. [O que é internet](#o-que-é-internet)
2. [Roteador](#roteador)
3. [MAC](#endereço-mac)
4. [DHCP](#dhcp)

## O que é internet

De forma bem simples, "A Internet é uma rede global de computadores" .  Porém, tecnicamente pode-se afirmar que "A Internet é a união de um enorme número de redes ao redor do mundo que se comunicam através do protocolo TCP/IP".

A Internet é uma gigantesca rede mundial de computadores, que interliga entre si desde grandes computadores até micros pessoais ou notebooks, através de linhas comuns de telefone, linhas de comunicação privadas, cabos submarinos, canais de satélite e diversos outros meios de telecomunicações.

Em resumo, a Internet é:

    Uma rede de redes baseada no protocolo TCP/IP;
    Uma comunidade de pessoas que usam e desenvolvem essas redes;
    Uma coleção de recursos que podem ser alcançados através destas redes.

### Organização da Internet

A Internet não é controlada de forma central por nenhuma pessoa ou organização.

A organização da Internet é feita a partir dos administradores das redes que a compõem e dos próprios usuários. Para isto, existem alguns órgãos internacionais que são responsáveis pela administração mundial da Internet.

    The Internet Society - é uma organização internacional não-governamental, cujo objetivo é a coordenação geral das tecnologias e aplicações da Internet.
    InterNIC (Internet Networking Information Center) - foi criado pela NSF para distribuir endereços IP.
    FNC (Federal Networking Council) - é um comitê que exerce a parte informativa da Internet. A FNC realiza o intermédio entre a IAB e as instituições governamentais, além de prestar suporte às agências no uso da Internet.
    IAB (Internet Architecture Board) - é o órgão que coordena a política da estrutura do funcionamento da Internet, bem como a pesquisa e o desenvolvimento relacionados ao funcionamento da Internet. O IAB tem como atribuições:

        A padronização dos protocolos da Internet;
        A gerência da publicação dos RFCs (Request For Comment);
        A coordenação das operações do IETF e do IRTF;
        O desenvolvimento do planejamento estratégico da Internet.

O IETF (Internet Engineering Task Force) é responsável pelo desenvolvimento de padrões para o  funcionamento da Internet. E o IRTF (Internet Research Task Force)  é responsável pelo desenvolvimento de pesquisas a longo prazo, como o desenvolvimento de protocolos.

### Regras

Há três regras na Internet que precisam ser definidas. A primeira delas é o provedor de informação. Ele disponibiliza informação para os usuários (quem às vezes referimos como clientes do serviço de informação).  Os usuários, por sua vez, constituem a segunda regra. E a terceira regra consiste do provedor de conexão, que provê a conexão de rede tanto para provedores de informação quanto para usuários.

### Acessos

As três principais maneiras de acesso à Internet são:

    Acesso via modem para um computador na Internet, às vezes chamado "shell access";
    Rede dial-up;
    Circuitos telefônicos de alta velocidade.

### Como os serviços Internet estão estruturados

Muitos dos serviços que rodam sobre a Internet são implementados usando uma arquitetura cliente/servidor. Na arquitetura clássica de software cliente/servidor, há duas partes:

    Um cliente, responsável por interagir com o usuário; por exemplo, aceitando dado de entrada do teclado e exibindo o dado para o usuário.
    Um servidor, responsável por executar tarefas conduzidas pelo cliente; por exemplo, acessando dado do lado do cliente, executando cálculos, e assim por diante, e então fornecendo o dado ou uma simples resposta para o cliente.

O cliente e o servidor podem rodar no mesmo computador; porém, mais frequentemente, eles rodarão em computadores diferentes. O servidor pode prover o cliente com recursos ou informação que o cliente não tem no seu próprio host.

A arquitetura cliente/servidor de serviços de informação Internet é o que torna possível para um computador conectado prover serviços para um outro.

Via: [ufpe](https://www.cin.ufpe.br/~flash/resultados/cursos/taais/1997-2/Internet/internet.html)

Aqui tem um mapa dos cabos submarino da internet: [submarinecablemap](https://www.submarinecablemap.com/)

Vídeo: [como funciona a internet por dentro](https://www.youtube.com/watch?v=M7OWQDblzkA)

---------------------------

## Roteador

Um roteador é um dispositivo que conecta duas ou mais redes ou sub-redes comutadas por pacotes. Ele tem duas funções principais: gerenciar o tráfego entre essas redes, encaminhando pacotes de dados para os endereços de IP desejados, permitindo que vários dispositivos usem a mesma conexão de internet.

### Como funciona um roteador?

Pense em um roteador como um controlador de tráfego aéreo e pacotes de dados como aviões enviados para diferentes aeroportos (ou redes). Assim como cada avião tem um destino único e segue uma rota única, cada pacote precisa ser guiado até seu destino da maneira mais eficiente possível. Da mesma forma que um controlador de tráfego aéreo assegura que os aviões cheguem aos seus destinos sem se perder ou sofrer uma grande interrupção no caminho, um roteador ajuda a direcionar os pacotes de dados para seu endereço de IP de destino.

### Qual é a diferença entre um roteador e um modem?

Embora alguns provedores de serviços da internet (ISPs) possam combinar um roteador e um modem dentro de um único dispositivo, eles não são a mesma coisa. Cada um desempenha um papel diferente, mas igualmente importante, na conexão de redes entre si e com a internet.

Um roteador forma redes e gerencia o fluxo de dados dentro dessas redes e entre elas, enquanto um modem conecta essas redes à internet. Os modems forjam uma conexão com a internet convertendo sinais de um provedor em um sinal digital que pode ser interpretado por qualquer dispositivo conectado.

### Quais são alguns dos desafios de segurança associados aos roteadores?

**Exploração de vulnerabilidades**: todos os roteadores baseados em hardware vêm com um software instalado automaticamente conhecido como firmware que ajuda o roteador a desempenhar suas funções. Como qualquer outro software, o firmware do roteador muitas vezes possui vulnerabilidades que os invasores cibernéticos podem explorar (um exemplo ), e os fornecedores de roteadores periodicamente emitem atualizações para corrigir essas vulnerabilidades. Por este motivo, o firmware do roteador precisa ser atualizado regularmente. Roteadores que não são corrigidos podem ser comprometidos por invasores, permitindo que eles monitorem o tráfego ou usem o roteador como parte de um botnet .

**Ataques DDoS**: Pequenas e grandes organizações são frequentemente alvo de ataques de negação de serviço distribuída (DDoS) dirigidos à sua infraestrutura de rede. Os ataques DDoS da camada de rede não mitigados podem sobrecarregar os roteadores ou fazer com que eles falhem, resultando em tempo de inatividade da rede.

**Credenciais administrativas**: todos os roteadores vêm com um conjunto de credenciais administrativas para desempenhar funções administrativas. Essas credenciais são definidas com valores padrão, com "admin" como nome de usuário e "admin" como senha. O nome de usuário e a senha devem ser redefinidos com algo mais seguro o mais rápido possível: os invasores conhecem os valores padrão comuns para essas credenciais e podem usá-las para assumir o controle do roteador remotamente se não forem redefinidas.

Via: [cloudflare](https://www.cloudflare.com/pt-br/learning/network-layer/what-is-a-router/)

Mais sobre roteadores e tipos: [cisco](https://www.cisco.com/c/pt_br/solutions/small-business/resource-center/networking/what-is-a-router.html#~como-escolher-roteadores-para-empresas-de-pequeno-porte)

Mais sobre diferênças entre roteador e modem: [tecnoblog](https://tecnoblog.net/responde/qual-a-diferenca-entre-modem-e-roteador/)

### Portas

![portas](../pics/roteador3g.jpg)

- 4 portas amarelas → local ou LAN, se comunica com o local. Vão entregar o IP interno da rede.
- 1 porta azul → WAN, se comunica com a internet. IP externo
- 2 antenas wifi → integrar IP interno

Ligar e desligar o roteador o IP externo muda.
Pode acontecer de mudar IP interno tbm.

**Site para verificar IP externo e local**:

Local via terminal → ipconfig(linux) / ifconfig(windows)

Externo → [meuip.com.br](http://meuip.com.br)

A diferença entre IP interno e externo, você pode verificar em [Protocolos de rede → IP](./1.protocolosDeRede.md#1-ip)

### Alterar senha padrão do roteador

Seu roteador tem um endereço web, www.Seu-Endereco-IP

Geralmente o endereço IP fica na parte inferior do roteador ou no manual de instrução. Lá também estará as informações de login.

> www.192.168.xx.x

Faça login e vá em Gestão/Management > Configuração de Conta/Account Settings, digite a senha atual e depois a nova senha.

Salve essa senha em um local seguro. Recomendo um gerenciador de senha.

### Criando uma rede "convidado"

1. Acesse endereço web do seu roteador www.Seu-Endereco-IP (fica na parte inferior do seu roteador)
2. Como depende muito de roteador para roteador, procure por Guest Network/Guest Zone/Convidado
3. Configure com nome de rede e senha, que não seja parecido com a senha do seu "wi-fi" ou do roteador. Mas tbm não seja uma senha tão fácil.
4. Dependendo do roteador tem mais algumas configurações, exemplo: quantidade de usuário logado ao mesmo tempo na rede convidado, horário que em estará disponível, se por habilitar uso de porta USB...
5. Salve a configuração e provavelmente irá pedir para reiniciar o roteador

Alguns porvedores de internet disponibilizam no próprio app a criação da rede "Convidado", verifique se existe essa opção no seu provedor de internet.

Se o seu provedor for "vivo", o app é: Vivo Smart Wi-Fi

[Por que você deve alterar a senha padrão em um roteador Wi-Fi](https://www.lifewire.com/changing-default-password-on-wifi-network-816567)

[Mais](https://www.quora.com/Does-changing-my-routers-admin-password-change-anything-else-in-the-router-I-want-to-make-the-router-secret-but-I-don-t-want-to-get-in-problems-with-my-family-for-doing-that)

---------------------------

## Endereço MAC

>Media Access Control / Controle de Acesso ao Meio

É o endereço físico que vem gravado no hardware(chip na placa de rede), é uma espécie de RG de sua placa de rede.

O endereço MAC, que tem como objetivo identificar individualmente cada computador a partir da fábrica, pode ser alterado manualmente.

O endereço MAC é um endereço de 48 bits(0 e 1) escrito em número hexadecimal de 12 dígitos que geralmente é exibido entre dois pontos ou hífen separando a cada dois dígitos (um octeto), facilitando a leitura.

> Exemplo: Um endereço MAC de 2c549188c9e3 normalmente é exibido como 2C:54:91:88:C9:E3 ou 2c-54-91-88-c9-e3.

Endereço MAC é dividido em duas partes:

![MAC](../pics/mac.webp)

- Identifica o fabricante: 3 primeiros octetos* identifica a marca.
  - chamada de identificador exclusivo organizacional ou OUI
  - Os OUIs para alguns fabricantes conhecidos são:
    - Dell: 00-14-22
    - Nortel: 00-04-DC
    - Cisco: 00-40-96
    - Belkin: 00-30-BD
- Identifica a placa de rede. Quem é aquele dispositivo.
  - Teoricamente, eles nunca serão repetidos mas é muito raro acontecer de dois dispositivos terem o mesmo.

> *Observe que, na linguagem do computador, um octeto significa um conjunto de 8 bits.
> Dois dígitos hexadecimais representam 8 bits e, portanto, um octeto.

Fonte e mais informações: [boson treinamentos](http://www.bosontreinamentos.com.br/redes-computadores/o-que-e-um-endereco-mac-mac-address/)

### Principais funções do endereço MAC

Ao conectar no seu wifi você recebe um IP no seu celular (dhcp).

Essa distribuição de ip é feita pelo MAC do seu dispositivo.

> Roteador → identifica o MAC → MAC distribui o IP

- **Atribuição de IP estático**: Onde o dispositivo se conecta e, se possuir o endereço MAC, é atribuído o IP estático, pelo roteador.
- **Filtragem de MAC Adress**: Uma forma de permitir que somente determinados MACs possam se conectar à rede.
- **Identificação de um dispositivo**: Redes públicas e determinados locais utilizam o MAC para identificar o dispositivo e restringir, a ele, a utilização da rede por determinado tempo.
- **Dispositivo de rastreamento**: Por ser único o seu número MAC, ele pode ser utilizado para saber sua localização a partir de seu celular, por exemplo, que, mesmo em movimento, realiza buscas por redes wi-fi próximas para acesso.

É possível fazer a alteração de seu MAC, e a maioria das placas de rede permite que você faça a mudança a partir do painel de configurações em seu ‘gerenciador de dispositivos’.

Fonte: [psafe](https://www.psafe.com/blog/como-descobrir-seu-endereco-mac-serve/)

---------------------------

## DHCP

> Dynamic Host Configuration Protocol

DHCP concede automaticamente endereços IP diferentes a todos os computadores, impressoras de rede, e dispositivos conectados a sua rede local ou da internet.

Sua função é atribuir automaticamente aos dispositivos conectados:

- endereço IP;
- gateway padrão;
- máscara de sub-rede;
- entre outras configurações.

Fonte e mais informações: [Lívia Bentini - GoDaddy](https://br.godaddy.com/blog/o-que-e-dhcp-e-para-que-serve/

### IP Dinâmico e Estático/Fixo rede local

#### IP dinâmico**

Ao desconectar meu dispositivo do wi-fi/cabo/internet, o IP desse dispositivo ficará disponível e outro dispositivo ao conectar na minha rede, poderá obter esse IP.

Pode acontecer tbm quando eu reiniciar o meu dispositivo, ele obtenha um novo IP.

#### IP Fixo

A atribuir um IP pro meu dispositivo, um pc, esse IP sempre será desse pc, desse endereço MAC.

Ou seja, é vinculado o endereço MAC desse pc ao IP fixo.
Mesmo que eu desconect esse pc, outro dispositivo não poderá obter esse IP, pq ele não possui o mesmo endereço MAC do meu pc.
E ao iniciar meu pc, ele receberá o mesmo IP de antes.

### DHCP algumas configurações

- **Range**

Posso configurar para distruibuir apenas 10 IPs no range **192.168.0.100 - 192.168.0.110** dentro da tabela DHCP.
Se eu tiver 10 dispositivo com IP dinâmico, e outro dispositivo tentar se conectar na minha rede, ele não vai conseguir pq não tem IP disponível.

O IP fixo não precisa ficar nesse range.

- **Bloqueio de dispositivo**

Você pode bloqueiar pelo endereço MAC, esse MAC não irá receber IP.

---------------------------
