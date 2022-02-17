import faker from "faker";
const RANDOM_NAME = faker.name.findName();
const RANDOM_EMAIL = faker.internet.email();
const RANDOM_ADRESS = faker.address.streetAddress();
describe('Testing registration form', () => {
    before(() => {
       cy.visit('https://demoqa.com/text-box');
   })

    it('Full Name', () => {
        cy.get('#userName').type(RANDOM_NAME);
    })

    it('Email', () => {
        cy.get('#userEmail').type(RANDOM_EMAIL);

    });

    it('Current Adress', () => {
        cy.get('#currentAddress').type(RANDOM_ADRESS);
    });

    it('Permanent Address', () => {
        cy.get('#permanentAddress').type(RANDOM_ADRESS);
    });

    it('Click Submit', () => {
        cy.get('#submit').click();
    });

    it('Verify Test Data', () => {
        cy.get('#name').should('have.text',`Name:${RANDOM_NAME}`);
        cy.get('#email').should('have.text',`Email:${RANDOM_EMAIL}`);
        cy.get('#output p#currentAddress').should('include.text', `Current Address :${RANDOM_ADRESS}`);
        cy.get('#output #permanentAddress').should('include.text', `Permanent:${RANDOM_ADRESS}`);
})
         
})
