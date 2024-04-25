describe('Login Test', () => {
    beforeEach(() => {  
        cy.visit("https://www.saucedemo.com/v1/")
    });
    it('Realizar login', () => {
      cy.get('[data-test="username"]').type("standard_user")
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('#login-button').click()
      cy.get('.product_label').should('contain', 'Products')
    });
    it('Login com user inválida', () => {
        cy.get('[data-test="username"]').type("invalid_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });
    it('Login com senha inválida', () => {
        cy.get('[data-test="username"]').type("stander_user")
        cy.get('[data-test="password"]').type("invalid_sauce")
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });
    it('Login com usuário bloqueado', () => {
        cy.get('[data-test="username"]').type("locked_out_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out')
    });
    it('Login com campo de user vazio', () => {
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required')
    });
    it('Login com campo senha vazio', () => {
        cy.get('[data-test="username"]').type("user")
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Password is required')
    });
    it('Login com campo de user e senha vazio', () => {
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required')
    });
  })