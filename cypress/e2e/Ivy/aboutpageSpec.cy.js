describe('Dev Innovuze About Page', () => {
  beforeEach(() => {
    cy.visit('https://dev.innovuze.com/');
  })
  it('Verify if the About Page contains all elements', () => {
    cy.get('.nav-item > a.nav-link:eq(1)').should('contain', 'About').click();
    cy.get('div.innovuze-logo-rectangle > h2')
    .invoke('text')
    .then((text) => text.replace('\n', ' '))
    .should('eq', 'Who We Are');
    cy.get('#abtTxtWrapper > .abtus-text > p').should('be.visible')
    cy.get('.abt-us-btn-wrapper > .btn').should('be.visible')

    })

    it('Verify if Join Our Team Button Works', () => {
      cy.get('.abt-us-btn-wrapper > .btn').click()

    })

    it('Verify the Careers', () => {
    cy.get('.section-title').should('contain','Careers')
    cy.get('#headingThree > .accordion-button:nth-child(1)').click();
    })
    // cy.get('.about-us');
    
    
    
    // cy.get('#abtTxtWrapper > .abtus-text > p').each(($p) => {});
    // cy.get('.abt-us-btn-wrapper > .btn').click(); 


    // cy.get('.section-title').should('contain','Careers')
    // cy.get('#headingThree > .accordion-button:nth-child(1)').click();

    });