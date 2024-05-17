# Saucedemo 

Link: https://www.saucedemo.com/v1/

Esse repositório foi desenvolvido, com base em alguns estudos e aulas sobre testes automatizados com a ferramentas como CypressJS e Cucumber (BDD/gherkin).

### Pré-requisitos
- Node.js e npm instalados na sua máquina.

### Instalação
-  Clone o repositório:
```bash
   git clone https://github.com/milenasribeiros/ SaucedemoTest.git

```

Instalar as dependencias do projeto
- Digite no terminal: 

```
cd SaucedemoTest
npm install
npm install cypress
```

- Abrir o cypress: 
```
npx cypress open
```

### Utilização
Para executar os testes, siga os passos abaixo:

Navegue até o diretório do projeto, caso ainda não esteja:
```
cd SaucedemoTest
```

Execute o Cypress para abrir a interface de testes:
```
npx cypress open
```

Na interface do Cypress, selecione o navegador de sua preferência e clique em "Start E2E Testing" para visualizar e executar os testes.


## Cenários de Teste

Os testes automatizados cobrem os seguintes cenários:

- Funcionalidade de Login: Verificar tentativas de login válidas e inválidas.
- Filtro de Produtos: Validar se os filtros funcionam com a listagem correta na pagina de produtos.
- Carrinho de Compras: Testar adição de itens no carrinho de compras usando os diversos logins disponibilizados pelo site. 

### Melhorias 

Este é um projeto pessoal em constante desenvolvimento. O objetivo principal é criar uma suite abrangente de testes automatizados para verificar o funcionamento correto de diferentes partes do site Saucedemo. Novos testes serão adicionados progressivamente para cobrir mais cenários e garantir a qualidade da aplicação.

### Tecnologias Utilizadas
- CypressJS: Para escrever e executar testes automatizados.
- Cucumber: Utilizado para escrever cenários de teste no formato BDD.
- Gherkin Syntax: Usado para definir cenários de teste em texto simples.

### Contribuições
Contribuições são bem-vindas! Se encontrar algum problema ou tiver sugestões de melhoria, sinta-se à vontade para abrir uma issue ou pull request neste repositório.
