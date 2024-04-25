#language: pt

Funcionalidade: Login do saucedemo 
    Descrição: Vamos realizar testes na tela de login 

Contexto:
    Dado que acesse o site "https://www.saucedemo.com/v1"

Cenário: Login válido 
    Quando informo o usuário válido "standard_user"
    E digito a senha válida "secret_sauce"
    E confirmo no botão de "LOGIN"
    Então vai ser exibido a tela de "Products"

Esquema do Cenário: Login inválido
    Quando eu informo o <usuario>
    E digito a <senha>
    E confirmo no botão do "LOGIN"
    Então exibe a <mensagem> de erro
    Exemplos: 
    |usuário          |senha          | mensagem                                                                   |
    |"invalid_user"   |"secret_sauce" |"Epic sadface: Username and password do not match any user in this service" |
    |"stander_user"   |"invalid_sauce"|"Epic sadface: Username and password do not match any user in this service" |
    |"locked_out_user"|"secret_sauce" |"Epic sadface: Sorry, this user has been locked out."                       |
    |""               |"password"     |"Epic sadface: Username is required"                                        |
    |"user"           |""             |"Epic sadface: Password is required"                                        |
    |""               |""             |"Epic sadface: Username is required"                                        |



