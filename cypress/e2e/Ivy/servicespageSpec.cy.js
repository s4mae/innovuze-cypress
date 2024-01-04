describe('Dev Innovuze Services Page', () => {
    beforeEach(() => {
      cy.visit('https://dev.innovuze.com/');
    })
    
    it('Verify if the About Page contains all elements', () => {
    cy.get('.nav-item > a.nav-link:eq(2)').should('contain', 'Services').click();
    cy.get('#services > div > .section-title > p').should('contain', 'What We Do')
    cy.get('#services > div > .services-subtitle > p').should('be.visible')
    cy.get('#services img:eq(0)').should('be.visible');
    cy.get('#services .services-title p:eq(0)').should('be.visible');
    cy.get('#services .services-description p:eq(0)').should('be.visible');
    cy.get('#services .btn-inquireNow-wrapper a:eq(0)')
    cy.get('.modal-content > .modal-body > .btn-close-wrapper')

    })
   
    it.only('Verify if "Inquire Now" Button on Each Services is Working', () => {
    const numServices = 8;
    
    for (let i = 0; i < numServices; i++) { // should be individually shown during running
      cy.get(`#services img:eq(${i})`).should('be.visible').wait(700);// should be shown highlighted
      cy.get(`#services .services-title p:eq(${i})`).should('be.visible');
      cy.get(`#services .services-description p:eq(${i})`).should('be.visible');
      cy.get(`.col-sm-6 > .btn-inquireNow-wrapper a:eq(${i})`).should('contain','Inquire Now').invoke('show').wait(700);// should be visible it is hidden
      cy.get(`#services .btn-inquireNow-wrapper a:eq(${i})`).click({ force: true }).wait(700);
      cy.get('.modal-content > .modal-body > .btn-close-wrapper').click({ force: true }).wait(700);
    }
    });

    
    it('Verify the Our Tech Stack if Visible', () => {
        cy.get('#ourTechStack > div h2').should('contain', 'Our Tech Stack');
    
    const numTechStackIcons = 17;
    
    for (let i = 0; i < numTechStackIcons; i++) {
      cy.get(`.row > .col-4 > .techStackIconWrapper img:eq(${i})`); //shoud be highlkighted each img
    
    }})
    
    it('Verify if "Get Started Here" button is working', () => {
        cy.get('.row >.text-center > .btn.btn-getStarted').click(); // should be shown being clicked
        // cy.get('.modal-content > .modal-body > .btn-close-wrapper').click();
    
    })
});