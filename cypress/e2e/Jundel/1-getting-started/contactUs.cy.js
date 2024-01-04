/// <reference types="Cypress" />

// Describe block for the test suite named 'Innovuze Website Test'
describe('Innovuze Website Test', () => {

    // Test case named 'Verify Contact Us'
    // it('Verify Contact Us', () => {

    //     // Open the Innovuze website
    //     cy.visit('https://www.innovuze.com')

    //     // Verify that the URL contains "innovuze.com"
    //     cy.url().should("contain", "innovuze.com")

    //     // Scroll into view and click on the 'Contact Us' section
    //     cy.get('#contactUsModal').scrollIntoView();
    //     cy.contains('Contact Us').should('be.visible').click();

    //     // Fill out the contact form
    //     cy.get('#name').type('hello world').click();
    //     cy.get('#email').type('jundel@gmail.com').click();
    //     cy.get('#subject').type('hello world').click();
    //     cy.get('#message').type('hello world this is a test message').click();

    //     // Click on the 'Send Message' button
    //     cy.get('#getintouch-submit.btn.contactUs-btn.float-end')
    //         .contains('Send Message')
    //         .click();

    //     // Click on the contact email link and go back
    //     cy.get('.info-title').contains('contact@innovuze.com')
    //         .should('be.visible')
    //         .click();
    //     cy.go(-1);

    //     // Click on the Facebook link and go back
    //     cy.get('.info-title').contains('fb.me/innovuzesolutions')
    //         .should('be.visible')
    //         .click();
    //     cy.go(-1);

    //     // Click on the phone number link and go back
    //     cy.get('.info-title').contains('(+63) 917 770 7799')
    //         .click();
    //     cy.go(-1);

    // });
    it('Verify Contact Us Modal Contains All ELements', () => {
        cy.visit('https://dev.innovuze.com')
        // Verify that the URL contains "innovuze.com"
        cy.url().should("contain", "dev.innovuze.com")
        cy.get('#navbarTogglerDemo01 > ul > li:nth-child(7) > a').click();
        cy.get('#contactUsModal > div > div').should('be.visible')
            .should('contain', 'Name')
            .and('contain', 'Email')
            .and('contain', 'Subject').should('be.visible');
        //Form
        cy.contains('Name').should('be.visible');
        cy.contains('Email').should('be.visible');
        cy.contains('Subject').should('be.visible');
        // cy.contains('Message ').should('be.visible');

        //Innovuze Contact Information
        cy.contains('brodrigo@innovuze.com').should('be.visible');
        cy.contains('fb.me/innovuzesolutions').should('be.visible');
        // cy.contains("(+63) 917 770 7799").should('be.visible');
        cy.contains('5th Level, Gateway Tower 1, Limketkai Center').should('be.visible');

        //Button
        // cy.contains('Send Message').should('be.visible');

    });

    it('Verify Contact Us Function if Field/s Are Empty', () => {
        cy.visit('https://dev.innovuze.com')
        // Verify that the URL contains "innovuze.com"
        cy.url().should("contain", "dev.innovuze.com")

        cy.get('#navbarTogglerDemo01 > ul > li:nth-child(7) > a').click();
        cy.get('#contactUsModal > div > div').should('be.visible')

        cy.get('#name').type('hello world', { delay: 100 })
        cy.get('#getintouch-submit').contains('Send Message').click({ force: true });

        cy.get('#email').type('jundel@gmail.com', { delay: 100 })
        cy.get('#getintouch-submit').contains('Send Message').click({ force: true });

        cy.get('#subject').type('hello world', { delay: 100 })
        cy.get('#getintouch-submit').contains('Send Message').click({ force: true });

        cy.get('#message').type('hello world this is a test message', { delay: 100 })

        cy.get('#getintouch-submit').contains('Send Message').click({ force: true });

    });

    it('Verify  Invalid Email Error is Working', () => {
        cy.visit('https://dev.innovuze.com')
        // Verify that the URL contains "innovuze.com"
        cy.url().should("contain", "dev.innovuze.com")

        cy.get('#navbarTogglerDemo01 > ul > li:nth-child(7) > a').click();
        cy.get('#contactUsModal > div > div').should('be.visible')

        cy.get('#name').type('hello world', { delay: 100 })
        cy.get('#email').type('jundelCOCmail.com', { delay: 100 })
        cy.get('#subject').type('hello world', { delay: 100 })
        cy.get('#message').type('hello world this is a test message', { delay: 100 })

        cy.get('#getintouch-submit').contains('Send Message').click({ force: true });
    });

    it('Verify Require Fields is Working', () => {
        cy.visit('https://dev.innovuze.com')
        // Verify that the URL contains "innovuze.com"
        cy.url().should("contain", "dev.innovuze.com")

        cy.get('#navbarTogglerDemo01 > ul > li:nth-child(7) > a').click();
        cy.get('#contactUsModal > div > div').should('be.visible')

        cy.get('#name').type('hello world', { delay: 100 })
        // cy.get('#email').type('jundelCOCmail.com')
        cy.get('#subject').type('hello world', { delay: 100 })
        cy.get('#message').type('hello world this is a test message', { delay: 100 })

        cy.get('#getintouch-submit').contains('Send Message').click({ force: true });
    });

    it('Verify Contact Us is Working', () => {
        cy.visit('https://dev.innovuze.com')
        // Verify that the URL contains "innovuze.com"
        cy.url().should("contain", "dev.innovuze.com")

        cy.get('#navbarTogglerDemo01 > ul > li:nth-child(7) > a').click();
        cy.get('#contactUsModal > div > div').should('be.visible')

        cy.get('#name').type('hello world', { delay: 100 }).should('be.visible')
        cy.get('#email').type('jundel@gmail.com', { delay: 100 })
        cy.get('#subject').type('hello world', { delay: 100 })
        cy.get('#message').type('hello world this is a test message', { delay: 100 })

        cy.get('#getintouch-submit').contains('Send Message').click({ force: true });
    });
});
