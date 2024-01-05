describe('Dev Innovuze Homepage', () => {
  beforeEach(() => {
    cy.visit('https://dev.innovuze.com/');
  })
  it('Verify all the navbar', () => {
    cy.get('.navbar-brand img').click();
    cy.get('.nav-link.home').should('contain', 'Home').click().wait(500);
    cy.get('.nav-item > a.nav-link:eq(1)').should('contain', 'About').click().wait(500);
    cy.get('.nav-item > a.nav-link:eq(2)').should('contain', 'Services').click().wait(500);
    cy.get('.nav-item > a.nav-link:eq(3)').should('contain', 'Projects').click().wait(500);
    cy.get('.nav-item > a.nav-link:eq(4)').should('contain', 'Careers').click().wait(500);
    cy.get('.nav-item > a.nav-link:eq(5)').should('contain', 'Blog').click().wait(500);
    cy.get('.nav-item > a.nav-link:eq(6)').should('contain', 'Contact Us').click().wait(500);

    })
    
    it('Verify if homepage contains all elements', () => {
      //navigation
    cy.get('.navbar-brand img').should('be.visible').wait(500)
    cy.get('.nav-link.home').should('be.visible').wait(500)
    cy.get('.nav-item > a.nav-link:eq(1)').should('be.visible').wait(500)
    cy.get('.nav-item > a.nav-link:eq(2)').should('be.visible').wait(500)
    cy.get('.nav-item > a.nav-link:eq(3)').should('be.visible').wait(500)
    cy.get('.nav-item > a.nav-link:eq(4)').should('be.visible').wait(500)
    cy.get('.nav-item > a.nav-link:eq(5)').should('be.visible').wait(500)
    cy.get('.nav-item > a.nav-link:eq(6)').should('be.visible').wait(500)
    //banner/ISI LOGO
    cy.get('.banner-item > div > img').should('be.visible').wait(500)
    //description
    cy.get('.innovuze-banner-text.text-center').should('contain', 'Innovuze Solutions, Inc.').wait(500);
    cy.get('.banner-big-text').should('contain', 'p').wait(500);
    cy.get('.banner-small-text').should('contain', 'p').wait(500);
    //button
    cy.get('.banner-btns > div > div:first-child').should('be.visible').wait(500)
    cy.get('.banner-btns > div > div:last-child').should('be.visible').wait(500)

    })

    it('Verify if Hover Action on the ISI Logo is Working', () => {
      cy.get('.banner-item > .innovuze-logo-banner-card').click()
    })
  
    it('Verify if Lets Talk Button is Working', () => {

    cy.get('.banner-btns > div > div:first-child').click()

    })
    
    it('Verify if Join Our team is Working', () => {
      cy.get('.banner-btns > div > div:last-child').click()
    })
    
  });
  