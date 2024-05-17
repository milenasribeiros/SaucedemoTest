/// <reference types="cypress" />

context('Login do Saucedemo', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
    });

    it('Login válido', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label').contains('Products')
    });

    it('Falhas no login', () => {

        cy.fixture('users_fail.json').then((dados) => {

            // const usuarioInvalido = dados.usuarios[5]

            dados.usuarios.forEach((usuario) => {
                cy.get('[data-test="username"]').clear()
                cy.get('[data-test="password"]').clear()
                if (usuario.usuario != '') {
                    cy.get('[data-test="username"]').type(usuario.usuario)
                }
                if (usuario.senha != '') {
                    cy.get('[data-test="password"]').type(usuario.senha)  
                }
    
                cy.get('#login-button').click()
                cy.get('[data-test="error"]').should('have.text',usuario.mensagem) 
            });
        })
    });

})