describe('Formulário de Consultoria', () => {

    it('Deve solicitar consultoria individual', () => {

        cy.start();
        cy.submitLoginForm('papito@webdojo.com', 'katana123');

        cy.goTo('Formulários', 'Consultoria')

        cy.get('input[placeholder="Digite seu nome completo"]').type('Matheus Freitas')
        cy.get('input[placeholder="Digite seu email"]').type('matheus@teste.com')
        cy.get('input[placeholder="(00) 00000-0000"]')
            .type('61999445353')
            .should('have.value', '(61) 99944-5353');

        cy.contains('label', 'Tipo de Consultoria')
            .parent()
            .find('select')
            .select('Individual')

        cy.contains('label', 'Pessoa Física')
            .find('input')
            .click()
            .should('be.checked')

        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('be.not.checked');

        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type('07066588596')
            .should('have.value', '070.665.885-96');


        cy.contains('label', 'Instagram')
            .find('input')
            .check()
            .should('be.checked')
    });


});