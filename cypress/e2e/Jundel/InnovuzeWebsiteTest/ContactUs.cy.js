/// <reference types="Cypress" />

describe('Check the Contact Us', () => {
    beforeEach(() => {
        cy.visit('https://dev.innovuze.com')
    })

    it('Verify Contact Us Modal Contains All ELements', () => {
        cy.url().should("contain", "dev.innovuze.com")
        cy.get('#navbarTogglerDemo01 > ul > li:eq(6)').click();
        cy.get('.button-holder a').click(); //accept cookies

        //Contact Us Form
        //Improve the selector and make it shorter as what sir bryan said
        cy.get('#contactUsModal > div > div').should('be.visible').and('contain', 'Contact Us');;
        cy.get('.needs-validation > div:eq(0)').should('be.visible').and('contain', 'Name');
        cy.get('.needs-validation > div:eq(1)').should('be.visible').and('contain', 'Email');
        cy.get('.needs-validation > div:eq(2)').should('be.visible').and('contain', 'Subject  ');
        cy.get('.needs-validation > div:eq(3)').should('be.visible').and('contain', 'Message');

        //Innovuze Contact Information
        cy.get('.site-infos > div > div:eq(0)').should('contain', 'brodrigo@innovuze.com').should('be.visible');
        cy.get('.site-infos > div > div:eq(1)').should('contain', 'fb.me/innovuzesolutions').should('be.visible');
        cy.get('.site-infos > div > div:eq(2)').should('contain', '(+63) 917 770 7799').should('be.visible');
        cy.get('.site-infos > div > div:eq(3)').should('contain', '5th Level, Gateway Tower 1, Limketkai Center').should('be.visible');

        // Button
        cy.get('#getintouch-submit').should('contain', 'Send Message').scrollIntoView().should('be.visible');

    });

    it('Verify Contact Us Function if Field/s Are Empty', () => {
        cy.url().should("contain", "dev.innovuze.com")
        cy.get('#navbarTogglerDemo01 > ul > li:eq(6)').click();
        cy.get('.button-holder a').click(); //acccept cookies

        cy.get('#getintouch-submit').contains('Send Message').click({ force: true });

    });

    it('Verify  Invalid Email Error is Working', () => {
        cy.url().should("contain", "dev.innovuze.com")
        cy.get('#navbarTogglerDemo01 > ul > li:eq(6)').click();
        cy.get('.button-holder a').click();
        cy.get('#contactUsModal > div > div').should('be.visible')

        cy.get('#name').type('hello world').should('have.value', 'hello world');
        cy.get('#email').type('mail').should('have.value', 'mail').should('be.visible');
        cy.get('#subject').type('hello world')
        cy.get('.mb-3:nth-child(2) > div.errors').should('be.visible'); //Create assertion that error messages are visible
        cy.get('#message').type('hello world this is a test message').should('have.value', 'hello world this is a test message');

        cy.get('#getintouch-submit').contains('Send Message').click({ force: true });
    });

    it.only('Verify Require Fields is Working', () => {
        cy.url().should("contain", "dev.innovuze.com")
        cy.get('#navbarTogglerDemo01 > ul > li:eq(6)').click();
        cy.get('.button-holder a').click();
        cy.get('#contactUsModal > div > div').should('be.visible')

        cy.get('#name').type('hello world').should('have.value', 'hello world');
        cy.get('#email').type('jundel@example.com').should('have.value', 'jundel@example.com');
        cy.get('#subject').type(' ');
        cy.get('#message').type('hello world this is a test message').should('have.value', 'hello world this is a test message');
        cy.get('.mb-3:nth-child(3) > div.errors').should('be.visible'); //Create assertion that error messages are visible

        cy.get('#getintouch-submit').contains('Send Message').click({ force: true });
    });

    it('Verify Contact Us is Working', () => {
        cy.url().should("contain", "dev.innovuze.com")

        cy.get('#navbarTogglerDemo01 > ul > li:eq(6)').click();
        cy.get('#contactUsModal > div > div').should('be.visible')

        cy.get('#name').type('hello world').should('have.value', 'hello world');
        cy.get('#email').type('jundel@gmail.com').should('have.value', 'jundel@gmail.com');
        cy.get('#subject').type('hello world').should('have.value', 'hello world');
        cy.get('#message').type('hello world this is a test message').should('have.value', 'hello world this is a test message');

        cy.get('#getintouch-submit').contains('Send Message').click({ force: true });
    });

});
