/// <reference types="cypress" />
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    })

    it.only('Deve fazer login com sucesso', () => {
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

    it('Deve exibir mensagem de erro ao inserir senha errada', () => {
        cy.get('#username').type('amandalaureano4@gmail.com')
        cy.get('#password').type('123456@*')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail amandalaureano4@gmail.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
    })

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, amandalaureano4 (não é amandalaureano4? Sair)')
    });

    it.only('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario, {log:false})
            cy.get('#password').type(dados.senha, {log:false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, amandalaureano4 (não é amandalaureano4? Sair)')
        })
    });
})