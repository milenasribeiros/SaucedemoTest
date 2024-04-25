describe('Ordenar os produtos', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
      });
    
    it('Ordenar de A a Z', () => {
        cy.get('.product_sort_container').select('Name (A to Z)')
        cy.get('#item_4_title_link > .inventory_item_name').first().should('contain', 'Sauce Labs Backpack')
        cy.get('#item_3_title_link > .inventory_item_name').should('contain', 'Test.allTheThings() T-Shirt (Red)')
    });
    it('Ordenar de Z a A', () => {
        cy.get('.product_sort_container').select('Name (Z to A)')
        cy.get('#item_3_title_link > .inventory_item_name').first().should('contain', 'Test.allTheThings() T-Shirt (Red)')
        cy.get('#item_4_title_link > .inventory_item_name').should('contain', 'Sauce Labs Backpack')

    });
    it('Ordenar por Price Low to High', () => {
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.get(':nth-child(1) > .pricebar > .inventory_item_price').first().should('contain', '$7.99')
        cy.get(':nth-child(6) > .pricebar > .inventory_item_price').should('contain', '$49.99')
    });
    it('Ordenar por Price High to Low', () => {
        cy.get('.product_sort_container').select('Price (high to low)')
        cy.get(':nth-child(1) > .pricebar > .inventory_item_price').first().should('contain', '$49.99')
        cy.get(':nth-child(6) > .pricebar > .inventory_item_price').should('contain', '$7.99')
    });
    
  })