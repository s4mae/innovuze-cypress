describe('Dev Innovuze Services Page', () => {
  beforeEach(() => {
      cy.visit('https://dev.innovuze.com/');
  });


  context('Services Page', () => {
      it('Verify if the Services Page contains all elements', () => {
          cy.get('.nav-item > a.nav-link:eq(2)').should('contain', 'Services').click();
          cy.get('#services > div > .section-title > p').should('contain', 'What We Do');
          cy.get('#services > div > .services-subtitle > p').should('be.visible');
          cy.get('#services img:eq(0)').should('be.visible');
          cy.get('#services .services-title p').should('be.visible');
          cy.get('#services .services-description p').should('be.visible');
          cy.get('#services .btn-inquireNow-wrapper a').should('contain', 'Inquire Now');
          cy.get('.modal-content > .modal-body > .btn-close-wrapper');
      });
  });


  context('Inquire Now Button', () => {
      it('Verify if "Inquire Now" Button on Each Services is Working', () => {
        cy.get('.nav-item > a.nav-link:eq(2)').should('contain', 'Services').click();
          const numServices = 8;

          for (let i = 0; i < numServices; i++) {
              cy.get(`#services img:eq(${i})`).should('be.visible');
              cy.get(`#services .services-title p:eq(${i})`).should('be.visible');
              cy.get(`#services .services-description p:eq(${i})`).should('be.visible');
              cy.get(`.col-sm-6 > .btn-inquireNow-wrapper a:eq(${i})`).click({ force: true });
              cy.get('.modal-content > .modal-body > .btn-close-wrapper').click({ force: true });
          }
      });
  });


  context('Tech Stack', () => {
      it('Verify the Our Tech Stack if Visible', () => {
        cy.get('.nav-item > a.nav-link:eq(2)').should('contain', 'Services').click();
          cy.get('#ourTechStack > div h2').should('contain', 'Our Tech Stack');

          const numTechStackIcons = 17;

          for (let i = 0; i < numTechStackIcons; i++) {
              cy.get(`.row > .col-4 > .techStackIconWrapper img:eq(${i})`).should('be.visible');
          }
      });
  });


  context.only('Get Started Button', () => {
      it('Verify if "Get Started Here" button is working', () => {
          cy.get('.row >.text-center > .btn.btn-getStarted').click();
          cy.get('.modal-content > .modal-body > .btn-close-wrapper').click();
      });
  });
});
