import { config } from '../config';

const addNewComputer = () => {
    it('Clicking on button', () => {
        cy.get('#add').click();
        });
}

const submitClick = () => {
        it ('submit', () => {
            cy.get('input[type="submit"]').click();
        });
    
}

describe('App',  () =>  {
    it('Checking title', () => {
        cy.visit(config.homepageUrl);
        cy.title().should('equal', 'Computers database');
    });

    addNewComputer();

    it('Entering name', () => {
        cy.get('#name').type('omni');
        cy.get('input[type="submit"]').click();
    });
    addNewComputer();

    it('submitting form', () => {
        cy.get('input[type="submit"]').click();
        cy.get('a[href*="/computers"]').click();
    });
    
    addNewComputer();

    it('Entering introduce date', () => {
        cy.get('#name').type('omni');
        cy.get('#introduced').type('2021-03-11');
        cy.get('input[type="submit"]').click();
    });

    addNewComputer();


    
});
