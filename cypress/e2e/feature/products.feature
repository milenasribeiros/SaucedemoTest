#linguage: pt

Funcionalidade: Verificar ordenação de produtos 
    Descrição: Verificar se os filtros funcionam corretamento com usuário válido 

Esquema do Cenário: Ordem dos produtos
    Dado que estou na página de produtos 
    Quando eu clico no botão dos filtros 
    E seleciono uma <opção> para ordenar os produtos
    Então o primeiro produto exibido deve ser <primeiro> e o <ultimo>
    |opção                | primeiro                          |ultimo                             |
    |"Name (A to Z)"      |"Sauce Labs Backpack"              |"Test.allTheThings() T-Shirt (Red)"|
    |"Nome (Z to A)"      |"Test.allTheThings() T-Shirt (Red)"|"Sauce Labs Backpack"              |
    |"Price (low to high)"|"$7.99"                            |"$49.99"                           |
    |"Price (high to low)"|"$49.99"                           |"$7.99"                            |




