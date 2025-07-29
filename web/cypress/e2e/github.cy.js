describe('Gerenciamento de Perfis no GitHub', () => {

    beforeEach(() => {
        cy.login();
        cy.goTo('Tabela', 'Perfis do GitHub');
    });

    it('Deve poder cadastrar um novo perfil do gitHub', () => {
        cy.get('#name').type('Matheus Freitas');
        cy.get('#username').type('matheusfmf');
        cy.get('#profile').type('QA');

        cy.contains('button', 'Adicionar Perfil').click();

        cy.contains('table tbody tr', 'matheusfmf')
            .should('be.visible')
            .as('trProfile');

        cy.get('@trProfile')
            .contains('td', 'Matheus Freitas')
            .should('be.visible');

        cy.get('@trProfile')
            .contains('td', 'QA')
            .should('be.visible');

    });

    it('Deve poder remover um perfil do gitHub', () => {

        const profile = {
            name: 'Matheus Freitas',
            username: 'matheus123',
            desc: 'QA'
        }
        cy.get('#name').type(profile.name);
        cy.get('#username').type(profile.username);
        cy.get('#profile').type(profile.desc);

        cy.contains('button', 'Adicionar Perfil').click();

        cy.contains('table tbody tr', profile.username)
            .should('be.visible')
            .as('trProfile');

        cy.get('@trProfile')
            .find('button[title="Remover perfil"]').click();

        cy.contains('table tbody tr', profile.username)
            .should('not.exist');
    });

    it('Deve validar o link do gitHub', () => {

        const profile = {
            name: 'Matheus Freitas',
            username: 'matheusfmf',
            desc: 'QA'
        }
        cy.get('#name').type(profile.name);
        cy.get('#username').type(profile.username);
        cy.get('#profile').type(profile.desc);

        cy.contains('button', 'Adicionar Perfil').click();

        cy.contains('table tbody tr', profile.username)
            .should('be.visible')
            .as('trProfile');

        cy.get('@trProfile').find('a')
            .should('have.attr', 'href', 'https://github.com/' + profile.username)
            .and('have.attr', 'target', '_blank')

    });
});