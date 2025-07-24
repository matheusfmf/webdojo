describe('Gerenciamento de Perfis no GitHub', () => {

    beforeEach(() => {
        cy.login();
        cy.goTo('Tabela', 'Perfis do GitHub');
    })

    it('Deve poder cadastrar um novo perfil do gitHub', () => {
        cy.log('TO do')

        cy.get('#name').type('Matheus Freitas');
        cy.get('#username').type('matheusfmf');

    });
});