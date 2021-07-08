(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[977],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(k,i(i({ref:t},c),{},{components:r})):a.createElement(k,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5658:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=r(2122),n=r(9756),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:2},p="Scripts",l={unversionedId:"tutorial-extras/linhacmd",id:"tutorial-extras/linhacmd",isDocsHomePage:!1,title:"Scripts",description:"Explicando comandos linux",source:"@site/docs/tutorial-extras/linhacmd.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/linhacmd",permalink:"/docs/tutorial-extras/linhacmd",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorial-extras/linhacmd.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Comandos B\xe1sicos Linux",permalink:"/docs/tutorial-extras/basico-linux"},next:{title:"Opera\xe7\xe3o Links",permalink:"/docs/tutorial-extras/pages-nm"}},c=[{value:"Acesso servidores",id:"acesso-servidores",children:[]},{value:"Restart servi\xe7os de rede",id:"restart-servi\xe7os-de-rede",children:[]},{value:"Splink - Monitoramento",id:"splink---monitoramento",children:[]},{value:"Perda de pacotes",id:"perda-de-pacotes",children:[]},{value:"VPN",id:"vpn",children:[]},{value:"Paperservice",id:"paperservice",children:[]},{value:"Hosts",id:"hosts",children:[]}],u={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scripts"},"Scripts"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Explicando comandos linux")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"tail -f")," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Comandos tails permitem que usu\xe1rios possam ler os comandos finais de um arquivo. Tamb\xe9m \xe9 \xfatil na monitora\xe7\xe3o de novas informa\xe7\xf5es atualizadas em tempo real em arquivos espec\xedficos."),(0,o.kt)("li",{parentName:"ul"},"Como Monitorar um Arquivo para Mudan\xe7as?",(0,o.kt)("br",{parentName:"li"}),"Para examinar um arquivo buscando por varia\xe7\xf5es use o comando tail seguido pela op\xe7\xe3o -f. Este comando \xe9 \xfatil ao visualizar as \xfaltimas dez linhas de um arquivo. Esta op\xe7\xe3o \xe9 comumente utilizada para acompanhar logs de arquivos em tempo real.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"cat")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"O comando cat do Linux \xe9 um dos mais \xfateis para se aprender. Seu nome \xe9 uma deriva\xe7\xe3o da palavra concatenate (concatenar) e permite que voc\xea crie, una e exiba arquivos no formato padr\xe3o de tela ou em outro arquivo, entre outras coisas.",(0,o.kt)("br",{parentName:"li"}),"Ele n\xe3o requer instala\xe7\xe3o uma vez que vem pr\xe9-instalado com o pacote coreutils em qualquer sistema baseado em Debian ou Red Hat.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"joe"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"joe exemplo.txt")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Este e' um exemplo de texto editado no joe,\num popular editor de texto bastante utilizado por\nusua'rios do sistema Linux.",(0,o.kt)("br",{parentName:"li"}),"Seus comandos sao bastante semelhantes aos do WordStar e\nSidekick para MSDOS.",(0,o.kt)("br",{parentName:"li"}),"Use o joe para editar os seus textos!")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"acesso-servidores"},"Acesso servidores"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ssh operacao@srv0000-1 / 2 \n\npcs status \n\npcs resource cleanup\n")),(0,o.kt)("h2",{id:"restart-servi\xe7os-de-rede"},"Restart servi\xe7os de rede"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/etc/init.d/bind9 restart\n/etc/init.d/xineted restart\n/etc/init.d/squid restart\n")),(0,o.kt)("p",null,'Monitoramento Zabbix aponta " multiplos servi\xe7os rodando no servidor "'),(0,o.kt)("p",null,"Em caso de multiplos processos abertos executar os comandos abaixo:\nPimenta: killall -9 apache2\n&&\nPimenta: melhor execute o script ",(0,o.kt)("inlineCode",{parentName:"p"},"/scripts/check_apache.sh")),(0,o.kt)("h2",{id:"splink---monitoramento"},"Splink - Monitoramento"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tail -f /var/log/splink.log")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/etc/init.d/papaservice restart")),(0,o.kt)("p",null,"alterar ou corrigir configura\xe7\xf5es splink "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"joe /etc/default/splink.conf")),(0,o.kt)("p",null,"/etc/init.d/splink restart"),(0,o.kt)("h2",{id:"perda-de-pacotes"},"Perda de pacotes"),(0,o.kt)("p",null,"Historico",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},'cat /var/log/splink.log | grep "INFO.*att" | grep -v "att: 0" | less'),(0,o.kt)("br",{parentName:"p"}),"\n","Monitoramento",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},'cat /var/log/splink.log | grep "INFO.*att" | grep -v "att: 0"'),(0,o.kt)("br",{parentName:"p"}),"\n","Verificar velocidade contratada",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"speedtest-cli --source 111.223.33."),"\n`"),(0,o.kt)("h2",{id:"vpn"},"VPN"),(0,o.kt)("p",null,"tail -f /var/log/openvpn_nm01.log"),(0,o.kt)("h2",{id:"paperservice"},"Paperservice"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tail -f /opt/paperservice/bin/info.log"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"etc/init.d/paperservice restart")),(0,o.kt)("p",null,"use o | grep -v cash para retirar os logs indesejados"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"joe /opt/paperservice/bin/config.xm")),(0,o.kt)("h2",{id:"hosts"},"Hosts"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cat ou joe"),"/etc/dhcp/dhcpd.host`"),(0,o.kt)("p",null,"Ver range de ip\n",(0,o.kt)("inlineCode",{parentName:"p"},"cat /etc/dhcp/dhcpd.master")))}d.isMDXComponent=!0}}]);