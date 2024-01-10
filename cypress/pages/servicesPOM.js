class ServicesPage {
    visit() {
      cy.visit('https://dev.innovuze.com/');
    }
  
    clickServicesNavItem() {
      cy.get('.nav-item > a.nav-link:eq(2)').should('contain', 'Services').click();
    }
  
    verifyServicesPageElements() {
      this.clickServicesNavItem();
      cy.get('#services > div > .section-title > p').should('contain', 'What We Do');
      cy.get('#services > div > .services-subtitle > p').should('be.visible');
      cy.get('#services img:eq(0)').should('be.visible');
      cy.get('#services .services-title p').should('be.visible');
      cy.get('#services .services-description p').should('be.visible');
      cy.get('#services .btn-inquireNow-wrapper a').should('contain', 'Inquire Now');
      cy.get('.modal-content > .modal-body > .btn-close-wrapper');
    }
  
    clickInquireNowButtons() {
      this.clickServicesNavItem();
    
      cy.get('#services img').each(($img, index) => {
        const serviceTitle = `#services .services-title p:eq(${index})`;
        const serviceDescription = `#services .services-description p:eq(${index})`;
        const inquireNowButton = `.col-sm-6 > .btn-inquireNow-wrapper a:eq(${index})`;
    
        cy.get($img).should('be.visible');
        cy.get(serviceTitle).should('be.visible');
        cy.get(serviceDescription).should('be.visible');
        
        cy.get(inquireNowButton).click({ force: true });
        cy.get('.modal-content > .modal-body > .btn-close-wrapper').click({ force: true });
      });
        
    }
  
    verifyTechStack() {
      this.clickServicesNavItem();
      cy.get('#ourTechStack > div h2').should('contain', 'Our Tech Stack').scrollIntoView();
  
      cy.get('.row > .col-4 > .techStackIconWrapper img').each(($icon) => {
      cy.get($icon).should('be.visible');
    });
    
    }
  
    clickGetStartedButton() {
      cy.get('.row >.text-center > .btn.btn-getStarted').click();
      cy.get('.modal-content > .modal-body > .btn-close-wrapper').click();
    }
  }
  
  export default ServicesPage;