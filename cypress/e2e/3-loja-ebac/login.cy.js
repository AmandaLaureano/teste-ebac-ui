/// <reference types="cypress" />

describe('Funcionalidade Login', () => {
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('amandalaureano4@gmail.com')
        cy.get('#password').type('123456@')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, amandalaureano4 (não é amandalaureano4? Sair)')
    })
})