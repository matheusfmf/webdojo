describe('Tocar o video', () => {
    it('Deve poder tocar o video de exemplo', () => {
        cy.login()  
        cy.contains('Video').click()

        // think time
        cy.wait(3000)

        cy.get('iframe[title="Video Player"]')
            .should('exist')
            .its('0.contentDocument.body')
            .then(cy.wrap)
            .as('iframePlayer')


        cy.get('@iframePlayer')
        .find('.play-button')
        .click()

        cy.get('@iframePlayer')
            .find('.pause-button')
            .should('be.visible')
    });

})