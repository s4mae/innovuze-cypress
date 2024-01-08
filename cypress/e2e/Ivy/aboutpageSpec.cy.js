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

    it.only('Verify if Join Our Team Button Works', () => {
      cy.get('.nav-item > a.nav-link:eq(1)').should('contain', 'About').click();
      cy.get('.abt-us-btn-wrapper > .btn').click();

    })

    it.only('Verify the Careers', () => {
    cy.get('.abt-us-btn-wrapper > .btn').should('be.visible').click();
    cy.get('.section-title').should('contain','Careers')
 
    for (let i = 0; i < 6; i++) {
       cy.get('#headingThree > button').eq(i).click();
      }
     
      cy.get('#headingThree > button').each(($button, index) => {
      cy.wrap($button).click();
    });


    })
  
    });