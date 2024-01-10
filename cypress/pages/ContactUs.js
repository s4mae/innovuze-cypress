class ContactUsPage {
    visit() {
        cy.visit('https://dev.innovuze.com');
    }

    openContactUsModal() {
        cy.get('#navbarTogglerDemo01 > ul > li:eq(6)').click();
        cy.get('.button-holder a').click();
    }

    verifyContactUsModalElements() {
        cy.get('#contactUsModal > div > div').should('be.visible').and('contain', 'Contact Us');
        cy.get('.needs-validation > div:eq(0)').should('be.visible').and('contain', 'Name');
        cy.get('.needs-validation > div:eq(1)').should('be.visible').and('contain', 'Email');
        cy.get('.needs-validation > div:eq(2)').should('be.visible').and('contain', 'Subject  ');
        cy.get('.needs-validation > div:eq(3)').should('be.visible').and('contain', 'Message');
        cy.get('.site-infos > div > div:eq(0)').should('contain', 'brodrigo@innovuze.com').should('be.visible');
        cy.get('.site-infos > div > div:eq(1)').should('contain', 'fb.me/innovuzesolutions').should('be.visible');
        cy.get('.site-infos > div > div:eq(2)').should('contain', '(+63) 917 770 7799').should('be.visible');
        cy.get('.site-infos > div > div:eq(3)').should('contain', '5th Level, Gateway Tower 1, Limketkai Center').should('be.visible');
        cy.get('#getintouch-submit').should('contain', 'Send Message').scrollIntoView().should('be.visible');
    }

    verifyContactUsFunctionEmptyFields() {
        cy.get('#getintouch-submit').contains('Send Message').click({ force: true });
    }

    verifyInvalidEmailError() {
        cy.get('#contactUsModal > div > div').should('be.visible');
        cy.get('#name').type('hello world').should('have.value', 'hello world');
        cy.get('#email').type('mail').should('have.value', 'mail').should('be.visible');
        cy.get('#subject').type('hello world');
        cy.get('.mb-3:nth-child(2) > div.errors').should('be.visible');
        cy.get('#message').type('hello world this is a test message').should('have.value', 'hello world this is a test message');
        cy.get('#getintouch-submit').contains('Send Message').click({ force: true });
    }

    verifyRequireFieldsError() {
        cy.get('#name').type('hello world').should('have.value', 'hello world');
        cy.get('#email').type('jundel@example.com').should('have.value', 'jundel@example.com');
        cy.get('#subject').type(' ');
        cy.get('#message').type('hello world this is a test message').should('have.value', 'hello world this is a test message');
        cy.get('.mb-3:nth-child(3) > div.errors').should('be.visible');
        cy.get('#getintouch-submit').contains('Send Message').click({ force: true });
    }

    fillAndSubmitContactForm(name, email, subject, message) {
        cy.get('#name').type('hello world').should('have.value', 'hello world');
        cy.get('#email').type('jundel@example.com').should('have.value', 'jundel@example.com');
        cy.get('#subject').type('hello world').should('have.value', 'hello world');
        cy.get('#message').type('hello world this is a test message').should('have.value', 'hello world this is a test message');
        cy.get('#getintouch-submit').contains('Send Message').click({ force: true });
    }
}

export default ContactUsPage;
