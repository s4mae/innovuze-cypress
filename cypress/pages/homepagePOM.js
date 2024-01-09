class HomePage {
    visit() {
      cy.visit('https://dev.innovuze.com/');
    }
  
    clickNavbarBrand() {
      cy.get('.navbar-brand img').click();
    }
  
    clickNavItem(index) {
      cy.get(`.nav-item > a.nav-link:eq(${index})`).click();
    }
  
    verifyNavItem(index, text) {
      cy.get(`.nav-item > a.nav-link:eq(${index})`).should('contain', text).click();
    }
  
    verifyNavbarElements() {
      this.clickNavbarBrand();
      this.verifyNavItem(0, 'Home');
      this.clickNavbarBrand();
      this.verifyNavItem(1, 'About');
      this.clickNavbarBrand();
      this.verifyNavItem(2, 'Services');
      this.clickNavbarBrand();
      this.verifyNavItem(3, 'Projects');
      this.clickNavbarBrand();
      this.verifyNavItem(4, 'Careers');
      this.clickNavbarBrand();
      this.verifyNavItem(5, 'Blog');
      this.clickNavbarBrand();
      this.verifyNavItem(6, 'Contact Us');
    }
  
    verifyHomepageElements() {
      // Verify navigation elements
      cy.get('.navbar-brand img').should('be.visible');
      cy.get('.nav-link.home').should('be.visible');
      for (let i = 1; i <= 6; i++) {
        cy.get(`.nav-item > a.nav-link:eq(${i})`).should('be.visible');
      }
  
      // Verify banner/ISI LOGO elements
      cy.get('.banner-item > div > img').should('be.visible');
  
      // Verify description elements
      cy.get('.innovuze-banner-text.text-center').should('contain', 'Innovuze Solutions, Inc.');
      cy.get('.banner-big-text').should('contain', 'p');
      cy.get('.banner-small-text').should('contain', 'p');
  
      // Verify button elements
      cy.get('.banner-btns > div > div:first-child').should('be.visible');
      cy.get('.banner-btns > div > div:last-child').should('be.visible');
    }
  
    clickISILogo() {
      cy.get('.banner-item > .innovuze-logo-banner-card').click();
    }
  
    clickLetsTalkButton() {
      cy.get('.banner-btns > div > div:first-child').click();
    }
  
    clickJoinOurTeam() {
      cy.get('.banner-btns > div > div:last-child').click();
    }
  }
  
  export default HomePage;
  