---
sidebar_position: 6
---

# Informações VPN

:::danger Pessoal os fucnionários do SAC não é para terem mais acesso pela VPN, somente se tiver chamado no GLPI com autorização da Diana Supervisora do SAC.
:::

Solicitações de acesso de VPN's de empresas de cobrança e de terceirizados, estou só reforçando que são liberações difernetes a de terceirizados, de empresas de cobrança e de funcionários do grupo. A diferença basica é o que esta liberado por padrão em cada uma, visto que terceirizados e empresas de cobrança não podem ter os mesmos acessos que os funcionários.
Então resumindo:
funcionarios -- vpnpnm ou vpnpdc
terceirizados -- vpntdc
cobrança   - vpncdc

favor liberar corretamente visto que existe risco de vazamento de dados caso seja liberado incorretamente

No https://vpnconf.novomundo.com.br tem os arquivos de cofiguração separados para cada um dos perfis.

:::caution Informem a eles o motivo das duas, explicando que a openvpn_pdc_win é para VTine, portal, servidores da cloud, e openvpn_pnm_win é para dataserver, voip, basicamente.
:::

## Liberar Parametros

Identifique a vpn para liberar o parametro no VTRINE

[Aguardando Imagem Vtrine](/img/paarmetrovtrine.png)
