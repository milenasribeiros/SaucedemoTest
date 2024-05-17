describe('Ordenar os produtos', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
    });

    it('Ordenar os produtos', () => {
        cy.fixture('order_produts.json').then((data) => {
          const ordenacaoTest = data.produtos;
    
          ordenacaoTest.forEach((produto) => {
            cy.get('.product_sort_container').select(produto.opcao);
    
            if (produto.primeiro && produto.segundo) {
              cy.get('.inventory_item_name').first().should('have.text', produto.primeiro);
              cy.get('.inventory_item_name').eq(1).should('have.text', produto.segundo);
            } else if (produto.firstPrice && produto.lastPrice) {
              cy.get('.inventory_item').first().find('.inventory_item_price').should('contain', produto.firstPrice);
              cy.get('.inventory_item').last().find('.inventory_item_price').should('contain', produto.lastPrice);
            }
            
            });
        });

    });
});