class AboutPage {
    visit() {
      cy.visit('https://dev.innovuze.com/');
    }
  
    clickAboutNavItem() {
      cy.get('.nav-item > a.nav-link:eq(1)').should('contain', 'About').click();
    }
  
    verifyAboutPageElements() {
      cy.get('div.innovuze-logo-rectangle > h2')
        .invoke('text')
        .then((text) => text.replace('\n', ' '))
        .should('eq', 'Who We Are');
      cy.get('#abtTxtWrapper > .abtus-text > p').should('be.visible');
      cy.get('.abt-us-btn-wrapper > .btn').should('be.visible');
    }
  
    clickJoinOurTeamButton() {
      this.clickAboutNavItem();
      cy.get('.abt-us-btn-wrapper > .btn').click();
    }
  
    verifyCareersSection() {
      cy.get('.abt-us-btn-wrapper > .btn').should('be.visible').click();
      cy.get('.section-title').should('contain', 'Careers');
  
      // for (let i = 0; i < 6; i++) {
      //   cy.get('#headingThree > button').eq(i).click();
      // }
  
      cy.get('#headingThree > button').each(($button, index) => {
        cy.wrap($button).click();
      });
    }
  }
  
  export default AboutPage;
  