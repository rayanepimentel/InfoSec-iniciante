# Dia 15 - Analista de Defesa (2)

- Pesquisar sobre Next Generation Firewall, entender o que é, para que serve e quais são os mais conhecidos no mercado hoje. 

Dica: o Gartner pode te ajudar.

## O que é

> Um firewall de próxima geração (NGFW) é um dispositivo de segurança de rede que fornece recursos além de um firewall tradicional e estável.

Firewall tradicional inspecional o estado do tráfego de rede. Permite/bloqueia o tráfego com base no estado, porta e protocolo. Filtra o tráfego com base nas regras definidas pelo administrador.

Já o Next Generation Firewall faz o que o tradicional faz e muito mais. Bloqueando ameaças modernas, como malware e ataque na camada de aplicação.

## Para que serve?

Firewall tradicional depende muitoa da inspeção de porta/protocolo, o que é ineficaz em uma ambiente virtualizado onde endereços e portas são atribuídos dinamicamente. 

Já Next Generation Firewall usa filtragem profunda de pacotes, para inspecionar o contéudo dos pacotes, fornece filtragem na camada de aplicação e pode monitorar e bloquear atividades suspeiras. Esses recursos são essenciais para garantir a segurança em um ambiente complexo e dinâmico.

## Quais são os cinco tipos de firewall?

    
1. **Firewall de filtragem de pacotes:** verifica o cabeçalho IP dos pacotes e descarta os sinalizados.
2. **Gateway em nível de circuito:** Sinaliza conteúdo malicioso com base em handshakes TCP e outras mensagens de iniciação de sessão de protocolo de rede, em vez de examinar os próprios pacotes.
3. **Firewall de inspeção de estado:** combina filtragem de pacotes com monitoramento de sessão para um nível adicional de segurança.
4. **Gateway em nível de aplicativo:** Filtra pacotes por porta de destino e string de solicitação HTTP. Também conhecido como firewall proxy.
5. **Firewall de próxima geração:** Emprega tecnologia inteligente de nível de aplicativo, sensível ao contexto para proteger contra ameaças avançadas.

## Analogia

[Eu gosto muito do Reality "Aeroporto Area Restrita", vou usar-lo como analogia]

Digamos que estamos no aeroporto e o funcionário da agência é o firewall tradicional, ele verifica se a mala tá com etiqueta e a passagem de ida e volta do passageiro. Não temos como afirmar que há algo a mais do que roupas na mala. 

Agora digamos que esse passageiro foi abordado pelo Agente da Polícia Federal, Dario Neto, que será o Next Generation Firewall. Ele revista o passageiro, abra a mala e verifica o que está dentro, se tiver coisas proibidas/ilicitas, a policia ficará ciente que alguém estava tentando passar coisas que não deveria passar.

[vmware](https://www.vmware.com/topics/glossary/content/next-generation-firewall.html) e [cisco](https://www.cisco.com/c/en/us/products/security/firewalls/what-is-a-next-generation-firewall.html#~choose-an-ngfw-firewall)