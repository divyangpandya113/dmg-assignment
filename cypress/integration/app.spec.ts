import { config } from '../config';

const addNewComputer = () => {
    it('Clicking on button', () => {
        cy.clearCookies();
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

    it('Entering wrong introduce date', () => {
        cy.get('#name').type('omni');
        cy.get('#introduced').type('20-03-2011');
        cy.get('input[type="submit"]').click();
        cy.get('a[href*="/computers"]').click();
    });

    addNewComputer();

    it('Entering Discontinued date', () => {
        cy.get('#name').type('omni');
        cy.get('#discontinued').type('2021-07-11');
        cy.get('input[type="submit"]').click();
    });

    addNewComputer();

    it('Entering wrong Discontinued date', () => {
        cy.get('#name').type('omni');
        cy.get('#discontinued').type('20-07-2023');
        cy.get('input[type="submit"]').click();
        cy.get('a[href*="/computers"]').click();
    });

    addNewComputer();
    
    it('selecting from the drop down', () => {
        cy.get('#name').type('omni');
        cy.get('select').select('ASUS');
        cy.get('input[type="submit"]').click();
    });

    addNewComputer();

    it('Filling all the field', () => {
        cy.get('#name').type('Divyang');
        cy.get('#introduced').type('2021-03-11');
        cy.get('#discontinued').type('2021-07-11');
        cy.get('select').select('ASUS');
        cy.get('input[type="submit"]').click();
        
    });

    // View and update

    it('Viewing data and updating name of computer', () => {
        cy.get('#searchbox').type('Divyang');
        cy.get('input[type="submit"]').click();
        cy.get('table tbody td').eq(0).get('tr').eq(1).contains('a', 'Divyang').click();
        cy.get('#name').clear();
        cy.get('input[value="Save this computer"]').click();
        cy.get('#name').type('Alexander');
        cy.get('input[Value="Save this computer"]').click();
    });

    it('Clicking on the cancle button while updating', () => {
        cy.get('#searchbox').clear();
        cy.get('#searchbox').type('Divyang');
        cy.get('input[type="submit"]').click();
        cy.get('table tbody td').eq(0).get('tr').eq(1).contains('a', 'Divyang').click();
        cy.get('#name').clear();
        cy.get('#name').type('Ferguson');
        cy.get('a[href*="/computers"]').click();
    });

    it('Entering wrong introduced date while updating', () => {
        cy.get('#searchbox').type('Omni');
        cy.get('input[type="submit"]').click();
        cy.get('table tbody td').eq(0).get('tr').eq(2).contains('a', 'omni').click();
        cy.get('#introduced').clear();
        cy.get('#introduced').type('20-07-2025');
        cy.get('input[Value="Save this computer"]').click();
        cy.get('#introduced').clear();
        cy.get('#introduced').type('2029-07-19');
        cy.get('input[Value="Save this computer"]').click();

    });
    
    it('Entering wrong Discontinued date while updating', () => {
        cy.get('#searchbox').type('Omni');
        cy.get('input[type="submit"]').click();
        cy.get('table tbody td').eq(0).get('tr').eq(3).contains('a', 'omni').click();
        cy.get('#discontinued').clear();
        cy.get('#discontinued').type('20-07-2023');
        cy.get('input[Value="Save this computer"]').click();
        cy.get('#discontinued').clear();
        cy.get('#discontinued').type('2023-07-09');
        cy.get('input[Value="Save this computer"]').click();

    });

    it('Updating the name of company', () => {
        cy.get('#searchbox').type('Omni');
        cy.get('input[type="submit"]').click();
        cy.get('table tbody td').eq(0).get('tr').eq(1).contains('a', 'omni').click();
        cy.get('select').select('RCA');
        cy.get('input[Value="Save this computer"]').click();

    });

    it('Deleting the computer', () => {
        cy.get('#searchbox').type('Omni');
        cy.get('input[type="submit"]').click();
        cy.get('table tbody td').eq(0).get('tr').eq(1).contains('a', 'omni').click();
        cy.get('input[Value="Delete this computer"]').click();

    });

});
