import { config } from '../config'

describe('App',  () =>  {
    it('<title> is correct', () => {
        cy.visit(config.homepageUrl);
        cy.title().should('equal', 'Computers database');
    });

    // xcontext('Querying', () => {
    //     beforeEach(() => {
    //         cy.visit('http://localhost:3000');
    //     });

    //     it('cy.get() - query DOM elements', () => {
    //         cy.get('#appIntro').should('contain', 'This is a proof of concept Application.');
    //     })
    // });

    // xcontext('Events', () => {
    //     it('.click() - click on a DOM element', () => {
    //         cy.get('#actionMessage').should('contain', 'Do not press the button!');
    //         cy.get('#actionBtn').click();
    //         cy.get('#actionMessage').should('contain', 'Boom!');
    //     })
    // });
});
