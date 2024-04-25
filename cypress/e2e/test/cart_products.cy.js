/// Aqui pode ser informado os diferentes logins disponiveis para testar no site, como "probleme_user" e "performance_glitch_user".
describe('Adicionar produtos ao carrinho', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('[data-test="username"]').type("problem_user") 
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
    });
    it('Colocar todos os produtos no carrinho', () =>{
        const totalProdutos = 6;
        for (let i=1; i <= totalProdutos; i++) {
            cy.get(`:nth-child(${i}) > .pricebar > .btn_primary`).click()
        }
        cy.get('.shopping_cart_badge').should('have.text', `${totalProdutos}`)
        cy.get('#shopping_cart_container').click();
        cy.url().should('include', '/cart.html');
        for (let i = 1; i <= totalProdutos; i++) {
            cy.get(`.cart_item:nth-child(${i}) .inventory_item_name`).should('exist');
        }
        cy.get('.cart_list > .cart_item').should('have.length', totalProdutos)
    });

});