---
sidebar_position: 2
---

# Scripts 
**Explicando comandos linux**
       
*tail -f* 
- Comandos tails permitem que usuários possam ler os comandos finais de um arquivo. Também é útil na monitoração de novas informações atualizadas em tempo real em arquivos específicos.
- Como Monitorar um Arquivo para Mudanças?          
Para examinar um arquivo buscando por variações use o comando tail seguido pela opção -f. Este comando é útil ao visualizar as últimas dez linhas de um arquivo. Esta opção é comumente utilizada para acompanhar logs de arquivos em tempo real.

*cat*
- O comando cat do Linux é um dos mais úteis para se aprender. Seu nome é uma derivação da palavra concatenate (concatenar) e permite que você crie, una e exiba arquivos no formato padrão de tela ou em outro arquivo, entre outras coisas.          
Ele não requer instalação uma vez que vem pré-instalado com o pacote coreutils em qualquer sistema baseado em Debian ou Red Hat.

*joe*             
`joe exemplo.txt`
- Este e' um exemplo de texto editado no joe,
um popular editor de texto bastante utilizado por
usua'rios do sistema Linux.          
Seus comandos sao bastante semelhantes aos do WordStar e 
Sidekick para MSDOS.            
Use o joe para editar os seus textos!

--------------------
## Acesso servidores

```
ssh operacao@srv0000-1 / 2 

pcs status 

pcs resource cleanup
```
## Restart serviços de rede 

```
/etc/init.d/bind9 restart
/etc/init.d/xineted restart
/etc/init.d/squid restart
```

Monitoramento Zabbix aponta " multiplos serviços rodando no servidor "

Em caso de multiplos processos abertos executar os comandos abaixo:
Pimenta: killall -9 apache2
&&
Pimenta: melhor execute o script `/scripts/check_apache.sh`


## Splink - Monitoramento 

`tail -f /var/log/splink.log`

`/etc/init.d/papaservice restart`

alterar ou corrigir configurações splink 

`joe /etc/default/splink.conf`

/etc/init.d/splink restart

## Perda de pacotes

Historico       
`cat /var/log/splink.log | grep "INFO.*att" | grep -v "att: 0" | less`         
Monitoramento         
`cat /var/log/splink.log | grep "INFO.*att" | grep -v "att: 0"`         
Verificar velocidade contratada        
`speedtest-cli --source 111.223.33.` 
`
## VPN

tail -f /var/log/openvpn_nm01.log

## Paperservice 

`tail -f /opt/paperservice/bin/info.log`
`etc/init.d/paperservice restart`

use o | grep -v cash para retirar os logs indesejados

`joe /opt/paperservice/bin/config.xm`

## Hosts 
`
cat ou joe `/etc/dhcp/dhcpd.host`

Ver range de ip 
`cat /etc/dhcp/dhcpd.master`
