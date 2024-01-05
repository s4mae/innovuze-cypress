describe('Dev Innovuze Services Page', () => {
  beforeEach(() => {
      cy.visit('https://dev.innovuze.com/');
  });


  describe('About Page', () => {
      it('Verify if the About Page contains all elements', () => {
          cy.get('.nav-item > a.nav-link:eq(2)').should('contain', 'Services').click();
          cy.get('#services > div > .section-title > p').should('contain', 'What We Do');
          cy.get('#services > div > .services-subtitle > p').should('be.visible');
          cy.get('#services img:eq(0)').should('be.visible');
          cy.get('#services .services-title p:eq(0)').should('be.visible');
          cy.get('#services .services-description p:eq(0)').should('be.visible');
          cy.get('#services .btn-inquireNow-wrapper a:eq(0)').should('be.visible');
          cy.get('.modal-content > .modal-body > .btn-close-wrapper').should('be.visible');
      });
  });


  describe('Inquire Now Button', () => {
      it('Verify if "Inquire Now" Button on Each Services is Working', () => {
          const numServices = 8;

          for (let i = 0; i < numServices; i++) {
              cy.get(`#services img:eq(${i})`).should('be.visible').wait(700);
              cy.get(`#services .services-title p:eq(${i})`).should('be.visible');
              cy.get(`#services .services-description p:eq(${i})`).should('be.visible');
              // cy.get(`.col-sm-6 > .btn-inquireNow-wrapper a:eq(${i})`).should('contain', 'Inquire Now').invoke('show').wait(700);
              cy.get(`.col-sm-6 > .btn-inquireNow-wrapper a:eq(${i})`).click({ force: true }).wait(700);
              cy.get('.modal-content > .modal-body > .btn-close-wrapper').click({ force: true }).wait(700);
          }
      });
  });


  describe('Tech Stack', () => {
      it('Verify the Our Tech Stack if Visible', () => {
          cy.get('#ourTechStack > div h2').should('contain', 'Our Tech Stack');

          const numTechStackIcons = 17;

          for (let i = 0; i < numTechStackIcons; i++) {
              cy.get(`.row > .col-4 > .techStackIconWrapper img:eq(${i})`).should('be.visible');
          }
      });
  });


  describe('Get Started Button', () => {
      it('Verify if "Get Started Here" button is working', () => {
          cy.get('.row >.text-center > .btn.btn-getStarted').click();
          cy.get('.modal-content > .modal-body > .btn-close-wrapper').click();
      });
  });
});
