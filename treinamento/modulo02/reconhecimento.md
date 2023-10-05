# Reconhecimento passivo e ativo

Reconhecimento(recon) é a primeira fase de um teste de penetração profissional.
O objetivo dessa fase é coletar o máximo de informações sobre o alvo. Que tipos de informações? exemplo:

- Informações sobre funcionários > quem são? sistema operacional dos funcionarios, quais são seus e-mails
- Informações sobre a empresa > o que ela faz
, qual o foca da empresa?
- Qual endereço IP?
- Quais portas estão abertas?
- Quais são os subdominos e os IPs?

[Lembre-se: O alvo não é o funcionário, tudo o que você coletar dessa funcionário tem que ser vinculado a empresa]

Quanto mais informações tivermos sobre o alvo nessa fase, maior será o ganho de sucesso nas etapas seguintes.

Essa etapa é como um guia para as demais etapas. Colha o máximo de informações que você consiga.

## Passive vs ative

**Reconnaissance(recon)** é o processo de aquisição de informações sobre um alvo. Esse alvo  pode ser um computador, uma rede ou uma futura vítima de um  [ataque](https://www.codecademy.com/resources/docs/general/cyberattack) de engenharia social. O reconhecimento pode ser passivo ou ativo, dependendo de como ele adquire informações.


### Passive

A coleta passiva de informações usa fontes públicas que possuem informações sobre esse alvo. O uso de recursos públicos para coletar informações é OSINT.  Usando o OSINT, você pode coletar coisas como endereços IP, nomes de domínio, endereços de e-mail, nomes, nomes de host, registros de DNS e até mesmo qual software está sendo executado em um site e seus [CVEs associados](https://www.redhat.com/pt-br/topics/security/what-is-cve), sem infringir as leia. São dados publicos, que estão disponiveis e podem serem acessados por qualquer pessoa.

Atividades como:

    Procurar registros DNS de um domínio de um servidor DNS público.
    Verificar anúncios de emprego relacionados ao site de destino.
    Ler notícias sobre a empresa-alvo.


### Ative

O reconhecimento ativo  envolve interagir ativamente com o alvo.

→ O **objetivo** é coletar informações sobre aquele dispositivo ou outros dispositivos que estejam conectados a ele na mesma rede.

→ O reconhecimento ativo pode ser usado para **descobrir** informações como portas abertas/fechadas, o sistema operacional de uma máquina, os serviços em execução, captura de banner, descoberta de novos hosts ou localização de aplicativos vulneráveis em um host.

Atividades:

    Conectando-se a um dos servidores da empresa, como HTTP, FTP e SMTP.
    Chamar a empresa na tentativa de obter informações (engenharia social).
    Entrar nas instalações da empresa fingindo ser um reparador.


### Diferenças

A principal diferença entre reconhecimento ativo e passivo são os métodos que eles usam para coletar informações.  

As ferramentas de reconhecimento ativo interagem diretamente com os sistemas para coletar informações no nível do sistema, enquanto as ferramentas de reconhecimento passivo dependem de informações disponíveis publicamente.  


## Ferramentas

- [Reconhecimento passivo](reconhecimento-passivo.md)
- [Reconhecimento ativo](reconhecimento-ativo.md)