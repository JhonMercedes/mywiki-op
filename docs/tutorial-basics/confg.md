---
sidebar_position: 3
---

# Home Office

## Chave ssh
O ideal é já criar o acesso e vocês criarem as conexões usando o RE e a chave ssh de cada um.  

Para isso preciso que cada um gere a sua chave ssh, no linux utilize o comando `ssh-keygen -b 2048 -m PEM -t rsa -f RE`, 
será solicitada uma senha que você criará e passará a utilizar para conectar nos servidores, além da senha serão criados dois arquivos um com o RE sem extesão, e outro com a extensão pub, preciso que envie esse pub no privado (Pimenta).  

Depois de alguns cadastrados iremos desabilitar os usuários genéricos operacao, tivit-fs, etc.. Faremos isso agora porque no site do guacamole você já informa o usuário e coloca a senha, não precisando depois voltar e editar as conexões.     

Entrar no srv0001-1 e cadastrar a senha também, logue como root, e de o comando passwd RE, a chave é para acesso remoto e o cadastramento no srv0001-1 é para acesso local e cups

Acesse o servidor da superloja e digite o comando abaixo: 
```
srv0001-1:~# passwd 1031837
Current Kerberos password:  de ENTER 
Enter new password:  crie sua senha
Re-type password: repita sua senha

Current Kerberos password:  de enter
passwd: senha atualizada com sucesso
```

Pronto!   
Acesso as lojas, exemplo:

```
ssh -i 1031837 1031837@srv0011-1 

senha: dox2go

ai digita sudo su - 

senha que colocou o srv0001
```