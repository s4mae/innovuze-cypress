/// <reference types="Cypress" />

// Describe block for the test suite named 'Innovuze Website Test'
describe('Check the Contact Us', () => {

    it('Verify Contact Us Modal Contains All ELements', () => {
        cy.visit('https://dev.innovuze.com')
        cy.url().should("contain", "dev.innovuze.com")
        cy.get('#navbarTogglerDemo01 > ul > li:nth-child(7) > a').click();
        //Contact Us Form
        cy.get('#contactUsModal > div > div').should('be.visible').should('contain', 'Name').and('contain', 'Email').and('contain', 'Subject').and('contain', 'Message').should('be.visible');

        //Innovuze Contact Information
        cy.contains('brodrigo@innovuze.com').should('be.visible');
        cy.contains('fb.me/innovuzesolutions').should('be.visible');
        // cy.contains('(+63) 917 770 7799').should('be.visible');
        cy.contains('5th Level, Gateway Tower 1, Limketkai Center').should('be.visible');

        //Button
        // cy.contains('Send Message').should('be.visible');

    });

    it('Verify Contact Us Function if Field/s Are Empty', () => {
        cy.visit('https://dev.innovuze.com')
        cy.url().should("contain", "dev.innovuze.com")

        cy.get('#navbarTogglerDemo01 > ul > li:nth-child(7) > a').click();
        cy.get('#contactUsModal > div > div').should('be.visible')
        cy.get('#name').type('hello world', { delay: 100 })
        cy.get('#getintouch-submit').contains('Send Message').click({ force: true });
        cy.get('#email').type('jundel@gmail.com', { delay: 100 })
        cy.get('#getintouch-submit').contains('Send Message').click({ force: true });
        cy.get('#subject').type('=hello world', { delay: 100 })
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
    it('Verify Contact Us is Working', () => {

        cy.get('.connectors-list > li').should(($lis) => {
            expect($lis).to.have.length(3)
            expect($lis.eq(0)).to.contain('Walk the dog')
            expect($lis.eq(1)).to.contain('Feed the cat')
            expect($lis.eq(2)).to.contain('Write JavaScript')
        })
    })
});
