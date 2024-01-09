import POM from '../pages/WebActions';


describe('Testing Innovuze Solutions Inc.', () => {
  beforeEach(() => {
    // visit the dev stage of innovuze website and click careers tab before each test
    cy.visit('https://dev.innovuze.com/')
    cy.get('div.cookie-banner div.button-holder a').click()
    cy.get('ul.navbar-nav>li:nth-child(5)').click()
  })
    // Testing Careers Tab
    it('Verifying Careers Tab Works on Click', () => {
      // page should be redirected to https://dev.innovuze.com/#careers
    cy.url().should('include', '#careers')
    cy.get('section.careers').should('be.visible').should('not.be.empty')
    })

    it('Verify if the Careers Page contains all elements', () => {
      // The Following Elements Should be Visible: "Careers" Text • Four Job Positions
      cy.url().should('include','careers')
      cy.get('section.careers h2').should('include.text','Careers')
      cy.get('section.careers > div > div.background-green > div.container-fluid > div.row > div:nth-child(2) > div:nth-child(1)').find('a').each(($el, index, $listofElements) => {
      cy.get('section.careers > div > div.background-green > div.container-fluid > div.row > div:nth-child(2) > div:nth-child(1) > a').eq(index).should('be.visible').should('not.be.empty')
      })
    })

    it('Verify if "View Open Roles Here" Button is Working', () => {
      // Button should be visible and user will be redirected to: https://dev.innovuze.com/careers/ Showing all available roles
      cy.get('section.careers > div > div.background-green > div.container-fluid > div.row > div:nth-child(2) > div:nth-child(2) > a').should('be.visible').should('include.text','View Open Roles Here').click()
      cy.url().should('include', 'careers')
      cy.get('section.careers-page').should('be.visible').should('not.be.empty')
    })
    
    
    it('Verify "Apply for This Job" Button is Working', () => {
      // An Google Form should open with the Position Applied is Pre-filled with the Position Selected in the Website
      cy.get('section.careers > div > div.background-green > div.container-fluid > div.row > div:nth-child(2) > div:nth-child(2) > a').click()
      cy.get('section.careers-page h2 > button').eq(0).click()
      cy.get('section.careers-page div.accordion-body > div a').eq(0).invoke('removeAttr','target').should('be.visible').should('include.text','Apply for This Job').click()
      cy.url().should('not.include', 'innovuze')
    })
    
    it('Verify Facebook Page Button', () => {
      // Facebook page should open : https://www.facebook.com/innovuzesolutions
      cy.get('section.careers > div > div.background-green > div.container-fluid > div.row > div:nth-child(2) > div:nth-child(2) > a').click()
      cy.get('section.careers-page a.job-posting-text').invoke('removeAttr','target').click()
      cy.url().should('not.include', 'innovuze')
    })

    it.only('Verify if Clicking the First Four Jobs is Working', () => {
      // Iterate over each element matching the selector
      cy.get('section.careers > div > div.background-green > div.container-fluid > div.row > div:nth-child(2) > div:nth-child(1)').find('a').each(($el, index, $listOfElements) => {
        POM.getFirstThreeWords('section.careers > div > div.background-green > div.container-fluid > div.row > div:nth-child(2) > div:nth-child(1) a').then((firstCombinedText) => {
          cy.get('section.careers > div > div.background-green > div.container-fluid > div.row > div:nth-child(2) > div:nth-child(1) > a').eq(index).invoke('removeAttr', 'target').click();
          POM.getFirstThreeWords('.accordion-button').then((secondCombinedText) => {
            cy.get('.accordion-body').eq(index).should('be.visible').should('not.be.empty');
            cy.get('section.careers-page div.accordion-body div a').eq(index).should('be.visible');
            cy.wrap(secondCombinedText).should('eq', firstCombinedText);
            cy.go('back');
          });
        });
      });
    });

  })
  
  