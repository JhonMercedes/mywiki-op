---
sidebar_position: 1
---

# Infraestrutura

Antes de entrarmos na lista de principais comandos Linux, primeiro você precisa saber os comandos básicos. Se você ainda tem insegurança sobre a interface de linha de comando ou comandos básicos, acesse [Linux Básico](/docs/tutorial-extras/basico-linux)

## Acesso Servidores

Existem duas maneiras de acessar os servidores:         
**ssh operacao | ssh -i RE RE@srv0010-1**    
Para ter acesso aos abra o terminal **konsole** e digite os seguinte comando:

```
ssh operacao@srv0000-1 ou 2
```

Substitua os 3 ultimos 000 pela numeração da filial que deseja ter acesso.

```
teste@1c58s8ds99ab:~$ ssh operacao@srv0000-1
operacao@srv0000-1's password:
```

Após esse procedimento digite a senha para ter acesso: **passwd**, em seguida digite `sudo su -` insira a senha novamente

```
operacao@srv0000-1:~$ sudo su -
[sudo] senha para operacao:
```

Se o servidor primário falhar tente acessar o secundário

> a função desse srv02 é assumir a loja caso o primário dê algum problema

## Uso do PING
O Ping (Packet Internet Network Grouper algo como Procurador de Pacotes da Internet) é um comando que serve para testar a conectividade entre equipamentos de uma rede. Ele basicamente envia dados para esses aparelhos e fica aguardando as respostas. Se o equipamento responder, significa que está ativo

```
teste# ping srv0000-1
teste# ping srv0000-2

1c58s8ds99ab:/home/teste# ping srv0000-1
PING srv0000-1.novomundo.com.br (172.1.1.1) 56(84) bytes of data.
64 bytes from 172.1.1.1 (172.1.1.1): icmp_seq1 ttl=60 time 22.1ms
64 bytes from 172.1.1.1 (172.1.1.1): icmp_seq2 ttl=60 time 24.1ms
64 bytes from 172.1.1.1 (172.1.1.1): icmp_seq3 ttl=60 time 26.1ms
--- srv0000-1.novomundo.com.br ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 1001ms
rtt min/avg/max/mdev = 22.100/3223/108/24.117/1.019 ms
```

> Certifique-se que não tenha perda de pacotes **0% packet**

Caso ambos servidores não retornem conectividade, peça ao colaborador(a) que verifique os equipamentos, reinicie cada equipamaneto 
a baixo e faça o teste por etapas

- Servidor Primário
- Secudário
- Modem
- Switch

## Cluster

Cluster significa “aglomerar” ou “aglomeração”, no caso da computação, o termo define uma arquitetura de sistema capaz combinar vários computadores para trabalharem em conjunto ou pode denominar o grupo em si de computadores combinados. Cada estação é denominada “nodo” e, combinadas, formam o cluster.

Servidor parado, links de internet mostram como todos offline?

Ao dar pcs status, caso apareça a seguinte mensagem, reiniciar os serviços do cluster.

    Error: cluster is not currently running on this node

```
Reiniciar corosync: /etc/init.d/corosync restart
Reiniciar pacemaker: /etc/init.d/pacemaker restart
Reiniciar pcsd: /etc/init.d/pcsd restart
```
Após a correção do erro!
```
srv0000-1:~# pcs status
Cluster name: loja_cluster
Stack: corosync
Current DC: server1.novomundo.com.br (version 1.1.17-b36b869ca8) - partition with quorum
Last updated: Tue Jun  8 09:06:19 2021
Last change: Sun Jun  6 17:32:46 2021 by root via crm_resource on server1.novomundo.com.br

2 nodes configured
4 resources configured

Online: [ server1.novomundo.com.br server2.novomundo.com.br ]

Full list of resources:

 Cluster_VIP    (ocf::heartbeat:IPaddr2):    Started server1.novomundo.com.br
 dhcp    (ocf::heartbeat:dhcpd):    Started server1.novomundo.com.br
 netifaces    (lsb:netifaces):    Started server1.novomundo.com.br
 splink    (lsb:splink):    Started server1.novomundo.com.br

Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

**Pcs Status**

Pcs status controla e configura o corsync Pacmaker fornecendo uma interface para os arquivos corosync.conf e cib.xml

`pcs cluster` Configura as opções e nós do cluster           
`pcs resource` Cria e gerencia recursos de cluster          
`pcs status` Visualiza o cluster atual e o status dos recursos.          


Executando comando `pcs status`

    Online: [ server1.novomundo.com.br server2.novomundo.com.br ]

No caso acima, ambos servidores estão ativos, esse é o padrão certo!

**Standby**

Servidor fica em reserva (Standby) detectando possíveis falhas. Caso as falhas aconteçam, o servidor reserva assume.

`pcs cluster standby server1.novomundo.com.br`

`pcs cluster standby server2.novomundo.com.br`

Para ativar novamente, utilize:

`pcs cluster unstandby server1.novomundo.com.br`


## Scripts /etc/init.d/

Nas distribuições que seguem o padrão do Debian, os scripts que executáveis que iniciam os serviços de sistema ficam todos dentro da pasta “/etc/init.d/”. Usamos alguns comandos para inicializar, parar e reinicializar serviços de rede entre outros, escolha o serviço que deseja e logo em seguida dê o comando, siga o exemplo abaixo:

```
/etc/init.d/apache2        restart
/etc/init.d/bind9          restart
/etc/init.d/xinetd         stop
/etc/init.d/squid          start
/etc/init.d/paperservice   stop
/etc/init.d/splink         restart
---------------------------------------
/scripts/atualizavoip.sh
/scripts/firewall restart.sh
/scripts/atualiza10.sh
/scritps/atualiza.sh

```

lembre-se que isso é apenas um exemplo logo abaixo estão os comandos de serviço de rede, executamos sempre que validamos a situação dos links

- links **mpls e adsl** estão OK!
- vpn's OK!
- sem perda de pacotes

então executamos os comandos abaixo:

```
/etc/init.d/bind9 restart  - servidor para protocolo DNS
/etc/init.d/squid restart - servidor proxy (http, https, ft e outros)
```

Para o DNS no Linux, nós temos a opção do **Bind**. Ele é um conjunto de softwares DNS padrões do Unix e que contém um 
servidor de nomes daemon, uma biblioteca *resolver* e outros utilitários.

**Squid** reduz a utilização das conexão e melhora o tempo de resposta fazendo cache de requisições frequentes de paginas
web em uma rede de computadores, também usado como proxy reverso

## Speedtest

Comando usado para medir conexões com a internet    
Com o Speedtest CLI, fica mais fácil:

- Analisar métricas de desempenho da conexão, como download, upload, latência e perda de pacotes nativamente, sem precisar de um navegador

`speedtest-cli --source (ipdolinkparateste)`

## Splink

Serviço para monitorar a situação dos links ativos nas filiais e a perda de pacotes.

Comando para identificar situação do serviço splink log.

`tail -f /var/log/splink.log`

- Primeiro item a ser observado é o nome/tipo do link, por exemplo **vpn, oiadsl, oimpls, etc...**. Informações importantes sobre este link ADSL são verificadas no [Sniffer](http:://sniffer.novomundo.com.br)

- A segunda coisa é o **Status/Situação** do link, e este é demostrado pelo atributo **OK**, se este estiver constando **true** significa que o circuito está operante, se estiver **false** significa que temos problemas.

O primeiro teste a se fazer é verificar se os aparelhos 'Modem' se está com as led's acessas everificar se o cabo de rede está conectado ao Switch. Após essa verificação e a identificação de qual link está **false** faça os procedimentos de testes abaixo:

- Desligar ADSL (teste: portal vtrine e caixa)
- Ligar ADSL e desligar MPLS (teste: portal vtrine e caixa)

Verifique quantos links de operadoras possam ter no local, use o Sniffer para te auxiliar [Sniffer](http:://sniffer.novomundo.com.br)

Se for constatado algum link com problemas abra um chamado para Operadora, anote o número do protocolo passado por eles e adicione no chamado do GLPI.

**Alteração peer**
Para realizar alteração dos **peers** como solicitado pelo Pimenta, realize o procedimento abaixo:

- Acesse o diretorio `/etc/default/splink.conf`
- Identifique a linha `name = oimpls`
- altere a linha `peer_address=10.3.3.9` para `peer_address=172.16.2.246`
- Apenas para links da **Oi**

:::caution Peer
Os demais serão `peer_addres=10.3.3.52` para `peer_address=172.16.2.230`
:::

```zsh
[link20]
dev=vlan10:3
name = oimpls
disable=False
mask=255.255.255.128
#test_method valid values: external_program, tcp, icmp
test_method=icmp
peer_address=172.16.2.246
peer_port=4409
peer_timeout=1
max_fail_attempts=5
#cmd_up=ifup vlan10:3
#cmd_down=ifdown vlan10:3
```

Restarte o splink `etc/init.d/splink restart`

**Perda de Pacotes**

Splink ajuda você a identificar a perda de pacotes.

**Monitoramento**

```
tail -f /var/log/splink.log | grep "INFO.*att" | grep -v "att: 0"
```

**Histórico**

```
cat /var/log/splink.log | grep "INFO.*att" | grep -v "att: 0" | less
```
## Ip route

> Comando para configurar uma rota estática

Filial não está tendo acesso a sites externos, verifique o ip route no servidor

```
srv0000-1:~$ ip route
10.1.55.33/24 via 172.1.1.1 dev vlan60
10.1.55.0/24 via 172.1.1.1 dev vlan60
10.1.55.8/29 via 172.1.1.1 dev vlan60
10.1.55.0/21 via 10.1.1.8 dev tun1
```

ao digitar o comando **ip route** a primeira linha teria que estar configurado para um ip via default `default via 192.1.1.1 dev vlan60` para adcionar essa linha basta verificar o último octeto do ip adls no splink, subtrair por -1.

> Exemplo: no splink o link adsl vivo é 192.168.1.**2**, então para adicionar o ip route é 192.168.1.**1**

então configure

```
srv0000-1:~$ ip route add default via 192.168.1.1
'verifique'
srv000-1:~$ ip route
default via 192.168.1.1 dev vlan60
10.1.55.33/24 via 172.1.1.1 dev vlan60
10.1.55.0/24 via 172.1.1.1 dev vlan60
10.1.55.8/29 via 172.1.1.1 dev vlan60
10.1.55.0/21 via 10.1.1.8 dev tun1
```

## Cups 

O CUPS é um servidor de impressão, e como todo servidor, ele serve a um cliente que pode ser o computador do usuário, ou uma série de computadores que precisam realizar uma impressão mas não possuem uma impressora física conectada a ele.          

Ele também pode trabalhar como um cliente, conectando-se ao computador “servidor” e enviando o pedido de impressão, mesmo que não possua os drivers da impressora que será utilizada, basta saber o “endereço” da impressora no servidor.  

**Ele atua apenas como servidor?**

Embora o CUPS seja um servidor de impressão, ele é mais utilizado de forma local, com uma impressora conectada diretamente através do cabo USB ou via rede wifi ou cabeada.

`/etc/init.d/cups restart`         
`/scripts/config.printer.save.default tm20`          
`/scripts/config.printer.save.individual tm20`     

## Paperservice 


Comando para Inicializar o serviço

•	`/etc/init.d/paperservice start `

Comando para Reinicializar o serviço

•	`/etc/init.d/paperservice restart`

Comando para Parar o serviço

•	`/etc/init.d/paperservice stop`

Comando abaixo é para acompanhar log de execução do serviço, precisamos usa-lo todas as vezes em que reiniciar

•	`tail -f /opt/paperservice/bin/info.log`


**Arquivo conf.xml PW**

Abra uma nova tag `<documento></documento`> insira as informações como mostra no exemplo abaixo

~~~ HTML 
<documentos>

 <documento>
    <idlocal>1</idlocal>
    <idtipo>1</idtipo>
 <!--   <printer>imppcttm01</printer>  -->
    <printer>imppcttm01</printer>
    <tipoDoc>todos</tipoDoc>
    </usuario>1035222</usuario>
</documento>

 </documentos>

 ~~~
Para salvar a configuração: **Ctrl+K e Ctrl+X** 
* Após restart o papersevice:
`/etc/init.d/paperservice restart` e acompanhe a log de execução `tail -f /opt/paperservice/bin/info.log`

**NOTAS SAINDO NA IMPRESSORA ERRADA**

Verificar no log do paperservice para onde as notas estão sendo impressas, se atentando ao **Local, Tipo e TipoDoc**, para assim alterar o **config.xml** de acordo.

Exemplo: 
* Notas estão saindo parte em uma impressora e parte em outra:       
    Verificar se estão sendo enviadas separadamente para cada Tipo
    Mudar no config.xml a impressora de destino de acordo com o Tipo que está errado

**NOTAS DUPLICADAS** 

Normalmente isso acontece porque o serviço **paperservice** está rodando em ambos servidores. Para corrigir, acesse um dos servidores e pare o serviço usando o comando         
`/etc/init.d/paperservice stop`          
Após restart o papersevice:`/etc/init.d/paperservice restart` e acompanhe a log de execução          
`tail -f /opt/paperservice/bin/info.log`


# REDES

## Switchs

## Dhcp

O DHCP, **Dynamic Host Configuration Protocol** (protocolo de configuração dinâmica de host), é um protocolo de serviço TCP/IP que oferece configuração dinâmica de terminais, com concessão de endereços IP de host, máscara de sub-rede, default gateway (gateway padrão), número IP de um ou mais servidores DNS, sufixos de pesquisa do DNS e número IP de um ou mais servidores WINS.

O `dhcpd.hosts` é onde se encontra a lista de IP's configurados para equipamentos da loja conectados no servidor, são eles:

- Impressora
- DVR's
- Alarmes
- AP's
- Switches gerenciáveis
- RFS 6000 ( VALIDAÇÃO DO FUNCIONAMENTO DOS COLETORES ).

**Fixar um MAC**

- Acessar um servidor da filial via ssh
  `ssh operacao@srv0000-1`
- Editar o arquivo **dhcpd.hosts**
- Crie um registro
  `host tipohost-99990-00-local { hardware ethernet 09:ba:ff:09:49:0f; fixed-address 172.11.1.1; }`

Use o comando `dhcpd -t` para verifcar se não há erros no arquivo

**Regras do nome**

- tipohost é o tipo do dispositivo que está sendo configurado, por exemplo: alarme para centrais de alarme, switch para switch, rep para relógios de ponto, imp para impressora, dvr para DVR, etc.
- 9999 é o código do centro de custo com 4 dígitos e zeros à esquerda.
- 00 é um sequencial iniciado em 1 par ao tipo do dispositivo.
- local é uma descrição breve sobre onde o dispositivo está instalado, por exemplo: principal para rack principal, brigadista se estiver no rack do brigadista, caixa se estiver na área de caixas, financeiro se estiver no departamento financeiro, etc.

  **Regras gerais**

- Não utilizar \_ (underline) no nome do host.
- Não utilizar letras maiúsculas.
- Não utilizar espaço.
- Observar o IP padrão para o tipo de dispositivo na página CheckList de Pré Natal.

  **Salvar**

- Pressione as teclas ctrl+k+x

**Restart o dhcp**

`pcs resource restart dhcp`

**Caso não tenha o MAC do dispositivo**

Se não tiver o MAC do dispositivo, configure-o para usar DHCP e no servidor utilize o comando abaixo para ver quem esta solicitando IP:
`tail -f /var/log/dhcp.log`

**Ativação do DHCP**

```
pcs resource restart dhcp
pcs resource enable dhcp
pcs resource disable dhcp
pcs resource --help - em caso de dúvidas use
```
## Firewall 

## Teste Conexão PW

Pessoal vejam o que tem de roteiro de testes na wiki, e se estiver diferente ou faltando algo que tenha aqui abaixo, complementem por favor:

**Roteiro de teste de conexão:**

1. Conectar no servidor
2. Se não estiver conectando diretamente (do nmg, nmgs, 172.16.25.0/24) em um dos dois servidores
   - pingar nos IP's validos do router
   - pingar nos IP's validos do servidor (1 ping)
   - conectar via SSH nos IP's validos do servidor (nmg,nmgs, srv0000-99, 172.16.25.0/24)
   - fazer verificação fisica no local (por telefone/video chamada) verificar se os equipamentos estão ligados na energia, se eles estão ligados, se os cabos estão devidamente conectados (rede e energia)
3. Se estiver conectando diretamente
   - Avaliar /var/log/splink.log, observando os links que estão ativos e o att
   - soltar ping para o portal.novomundo.com.br e acompanhar perda de pacote e o time (latência, tempo médio depende da posição geográfica da filial, sendo valores aceitaveis menor que 100 ms)
   - executar na filial o teste speedtest.novomundo.com.br e observar velocidade de upload/download e demais indicadores
   - se todos os links estiverem funcionando mas perdendo pacote, pode indicar problema na rede local da filial (loop, dispositivo poluindo a rede, etc.) ou problema o gateway de VPN (DC, neste caso outras filiais estariam passando pelo mesmo problema)
   - verificar situação do firewall
   - verificar no sniffer algum consumo alto de banda
   - no servidor executar bmon e acompanhar o uso de rede das interfaces
   - verificar situação dos servidores do PW no zabbix (servidores intra01, intra02, intra03 e intra04) http://zabbix.novomundo.com.br/screens.php?elementid=16 (principais indicadores load average < 10 e idle > 60)
     algum problema nesse topico outras filiais estaram reclamando também
   - verificar se não existe alguma coisa afetando o banco de dados (outras filiais normalmente reclamariam também)

## Conexão WIFI PW

**Procedimentos para verificar wifi da loja**

1. `srv0000-00:~# ping wifi` tem que retornar o endereço **172.16.1.40** se retornar outro ip deve-se confirmar se o ip 172.16.1.40 esta setado dentro do arquivo
2. `/etc/bind/db.wifi.novomundo.com.br`  
   confirmar se o firewall esta rodando com o comando `iptables -L`  
   confirmar se o ip route e o campo do firewall `WIFI_FW_INTERNET_DEV[1]=]` estao usando a msm vlan, e se os ips do `WIFI_FW_INTERNET_NET WIFI_FW_INTERNET_GW` estão corretos
3. No `splink.conf` confirmar se está setado as linhas 
  
  ```
  [link50.route2]  
   balance=False  
   net=172.16.1.40/32  
   gw_dev=vlan10  
   [link50.route3]  
   balance=False  
   net=10.100.0.0/20  
   gw_dev=vlan26  
   default_table=true
   ```
4. No link50 (vlan60) e da vlan61 tbm (o numero do link varia de acordo a configuraçao que esta setada para aquela vlan)

## VPN

Todas as filiais contam com pelo menos duas VPNs, uma para DC e outra para NM, podendo ter até 4, seguindo o modelo de dois links de internet (um profissional e outro adsl)

```
vpndc02    #I. if: tun6   - addr: 10.8.40.22      - Ok: True  - Ck: True  - rec: False - Pol: load-balance - Weight: 0.6   -  test: True  - att: 0 
vivofibra  #I. if: vlan60 - addr: 189.114.43.34   - Ok: True  - Ck: False - rec: False - Pol: failover     - Weight: 0.1   -  test: True  - att: 0 
vpnnm01    #I. if: tun0   - addr: 10.8.8.154      - Ok: True  - Ck: False - rec: False - Pol: load-balance - Weight: 0.6   -  test: True  - att: 0 
vpndc01    #I. if: tun5   - addr: 10.8.32.230     - Ok: True  - Ck: False - rec: False - Pol: load-balance - Weight: 0.6   -  test: True  - att: 0 
tim4g      #I. if: vlan61 - addr: 192.168.1.2     - Ok: True  - Ck: True  - rec: False - Pol: failover     - Weight: 0.1   -  test: True  - att: 0 
vpnnm02    #I. if: tun1   - addr: 10.8.17.50      - Ok: True  - Ck: False - rec: False - Pol: load-balance - Weight: 0.6   -  test: True  - att: 0 

**Logs**       
ps aux | grep vpn Para ver se estão ativas

tail -f /var/log/openvpn_nm01.log Para a VPN NM
tail -f /var/log/openvpn_dc01.log Para a VPN DC
Cada VPN está associada a um link, sendo o padrão:

vlan60: NM01 e DC01
vlan61: NM02 e DC02
VPN NM: Conexão com serviços e servidores no CPD, datacenter da administração.
VPN DC: Conexão com serviços e servidores na Oracle, em seu datacenter.

Em caso das vpn's estarem down é bom reiniciar o modem ADSL primeiro, logo após reiniciar executar os scripts para derrubar e subir as vpns.

```
derrubar: nm01            
/scripts/openvpn_down.sh /etc/openvpn/openvpn_nm01.ovpn          
subir: nm02            
/scripts/openvpn_up.sh openvpn_nm02.ovpn          
derrubar: dc01          
/scripts/openvpn_down.sh /etc/openvpn/openvpn_dc01.ovpn           
subir: dc02                
/scripts/openvpn_up.sh openvpn_dc02.ovpn``` 

O comando a seguir identifica o certificado da vpn  
`tail -f /var/log/openvpn_nm01.log`

## Servidores VOIP

Acesso ao servidor voip 
`ssh -i RE RE@voip.novomundo.com.br`

- Televendas - voip0600.novomundo.com.br
- SAC - sac.novomundo.com.br
- Credito - voip0922.novomundo.com.br
- Martins Ribeiro e Neww - voip0933.novomundo.com.br
- Mega Moda Shopping - voip9982.novomundo.com.br
- Mega Moda Park - voip9984.novomundo.com.br
- Construtora - voip0828.novomundo.com.br
- Montreal - voip0984.nvomundo.com.br
- Cada CD tem o seu: 515 - voip0515,novomundo.com.br
- 540 - voip0540.novomundo.com.br, e assim por diante.
- Para administração NM e lojas NM voip.novomundo.com.br

## Chrome no Linux

Baixe o arquivo na maquina direto no browser, o arquvio sera baixado com extensão `.deb`

abra o terminal e acesse como root o ip do colaborador  
digite o comando whoami para ver se está como root
logo depois veja em qual usuario foi feito o download, exemplo `teste ou u30023ssa....`
no terminal como **root** digite  
`$cd /home/teste/Downloads` de um `ls`  
verifique o download com nome de arquivo **google-....**
de o comando `dpkg -i google- .....`

pronto!
espere descompatar o arquivo
