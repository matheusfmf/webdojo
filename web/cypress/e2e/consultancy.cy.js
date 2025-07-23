import {personal, company} from '../fixtures/consultancy.json'

describe('Formulário de Consultoria', () => {
    beforeEach(() => {
        cy.login()
        cy.goTo('Formulários', 'Consultoria')

        cy.fixture('consultancy').as('consultancyData')
    });

    it('Deve solicitar consultoria Individual', function () {
        
        cy.get('input[placeholder="Digite seu nome completo"]').type(personal.name)
        cy.get('input[placeholder="Digite seu email"]').type(personal.email)
        cy.get('input[placeholder="(00) 00000-0000"]')
            .type(personal.phone)
        //.should('have.value', '(61) 99944-5353');

        cy.contains('label', 'Tipo de Consultoria')
            .parent()
            .find('select')
            .select(personal.consultancyType)

        if (personal.personType === 'cpf') {
            cy.contains('label', 'Pessoa Física')
                .find('input')
                .click()
                .should('be.checked')

            cy.contains('label', 'Pessoa Jurídica')
                .find('input')
                .should('be.not.checked');

        }
        if (personal.personType === 'cnpj') {
            cy.contains('label', 'Pessoa Jurídica')
                .find('input')
                .click()
                .should('be.checked')

            cy.contains('label', 'Pessoa Física')
                .find('input')
                .should('be.not.checked');
        }

        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type(personal.document)
            .should('have.value', '070.665.885-96');


        personal.discoveryChannels.forEach((channel) => {
            cy.contains('label', channel)
                .find('input')
                .check()
                .should('be.checked')
        })

        cy.get('input[type="file"]')
            .selectFile(personal.file, { force: true })

        cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
            .type(personal.description)


        personal.techs.forEach((tech) => {
            cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
                .type(tech)
                .type('{enter}')

            cy.contains('label', 'Tecnologias')
                .parent()
                .contains('span', tech)
                .should('be.visible')
        })

        if (personal.terms === true) {
            cy.contains('label', 'termos de uso')
                .find('input')
                .check()
                .should('be.checked')

        }
        cy.contains('button', 'Enviar formulário')
            .click()

        cy.get('.modal', { timeout: 10000 })
            .should('be.visible')
            .find('.modal-content')
            .should('be.visible')
            .and('have.text', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')

    });

    it('Deve solicitar consultoria In Company', () => {

        cy.get('input[placeholder="Digite seu nome completo"]').type(company.name)
        cy.get('input[placeholder="Digite seu email"]').type(company.email)
        cy.get('input[placeholder="(00) 00000-0000"]')
            .type(company.phone)
        //.should('have.value', '(61) 99944-5353');

        cy.contains('label', 'Tipo de Consultoria')
            .parent()
            .find('select')
            .select(company.consultancyType)

        if (company.personType === 'cpf') {
            cy.contains('label', 'Pessoa Física')
                .find('input')
                .click()
                .should('be.checked')

            cy.contains('label', 'Pessoa Jurídica')
                .find('input')
                .should('be.not.checked');

        }
        if (company.personType === 'cnpj') {
            cy.contains('label', 'Pessoa Jurídica')
                .find('input')
                .click()
                .should('be.checked')

            cy.contains('label', 'Pessoa Física')
                .find('input')
                .should('be.not.checked');
        }

        cy.contains('label', 'CNPJ')
            .parent()
            .find('input')
            .type(company.document)
            // .should('have.value', '070.665.885-96');

        company.discoveryChannels.forEach((channel) => {
            cy.contains('label', channel)
                .find('input')
                .check()
                .should('be.checked')
        })

        cy.get('input[type="file"]')
            .selectFile(company.file, { force: true })

        cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
            .type(company.description)


        company.techs.forEach((tech) => {
            cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
                .type(tech)
                .type('{enter}')

            cy.contains('label', 'Tecnologias')
                .parent()
                .contains('span', tech)
                .should('be.visible')
        })

        if (company.terms === true) {
            cy.contains('label', 'termos de uso')
                .find('input')
                .check()
                .should('be.checked')

        }
        cy.contains('button', 'Enviar formulário')
            .click()

        cy.get('.modal', { timeout: 10000 })
            .should('be.visible')
            .find('.modal-content')
            .should('be.visible')
            .and('have.text', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')

    });

    it('Deve verificar os campos obrigatórios', () => {

        cy.contains('button', 'Enviar formulário')
            .click()

        cy.contains('label', 'Nome Completo *')
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', 'Campo obrigatório')
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)')

        cy.contains('label', 'Email *')
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', 'Campo obrigatório')
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)')

        cy.contains('label', 'termos de uso')
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', 'Você precisa aceitar os termos de uso')
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)')

    });


});