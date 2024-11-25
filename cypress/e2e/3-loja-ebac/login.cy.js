/// <reference types="cypress" />

describe('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('amandalaureano4@gmail.com')
        cy.get('#password').type('123456@')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, amandalaureano4 (não é amandalaureano4? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir o usuário inválido', () => {
        cy.get('#username').type('amandalaureano@gmail.com')
        cy.get('#password').type('123456@')
        cy.get('.woocommerce-form > .button').click()

        //cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
        cy.get('.woocommerce-error').should('exist')
    })

    it.only('Deve exibir mensagem de erro ao inserir senha errada', () => {
        cy.get('#username').type('amandalaureano4@gmail.com')
        cy.get('#password').type('123456@*')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail amandalaureano4@gmail.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
    })
})