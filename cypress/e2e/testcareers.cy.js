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
    })
    it('Verify if the Careers Page contains all elements', () => {
      // The Following Elements Should be Visible: "Careers" Tex • Four Job Positions
      cy.visit('https://dev.innovuze.com/')
      cy.get('section.careers h2').contains('Careers')
      cy.get('section.careers > div > div.background-green > div.container-fluid > div.row > div:nth-child(2) > div:nth-child(1) > a:nth-child(1)').should('be.visible').should('include.text','Data Quality Specialist')
      cy.get('section.careers > div > div.background-green > div.container-fluid > div.row > div:nth-child(2) > div:nth-child(1) > a:nth-child(2)').should('be.visible').should('include.text','QA Engineer')
      cy.get('section.careers > div > div.background-green > div.container-fluid > div.row > div:nth-child(2) > div:nth-child(1) > a:nth-child(3)').should('be.visible').should('include.text','Web Developer')
      cy.get('section.careers > div > div.background-green > div.container-fluid > div.row > div:nth-child(2) > div:nth-child(1) > a:nth-child(4)').should('be.visible').should('include.text','DevOps / SysAdmin')
    })
    it('Verify if Clicking the First Four Jobs is Working', () => {
      // The User should be redirected to  https://dev.innovuze.com/careers#<position_chosen_position> and The Job Contents should be visible and as well as the "Apply for This Job" Button
      cy.get('section.careers > div > div.background-green > div.container-fluid > div.row > div:nth-child(2) > div:nth-child(1) > a:nth-child(1)').invoke('removeAttr','target').click()
      cy.url().should('include', '#data-quality-specialist')
      cy.get('section.careers-page h2 > button').eq(0).contains('Data Quality Specialist');
      cy.get('section.careers-page div.accordion-body > p:nth-child(1)').eq(0).should('be.visible')
      cy.get('section.careers-page div.accordion-body > div a').eq(0).should('be.visible')

      cy.visit('https://dev.innovuze.com/')
      cy.get('section.careers > div > div.background-green > div.container-fluid > div.row > div:nth-child(2) > div:nth-child(1) > a:nth-child(2)').invoke('removeAttr','target').click()
      cy.url().should('include', '#qa-engineer')
      cy.get('section.careers-page h2 > button').eq(1).contains('QA Engineer');
      cy.get('section.careers-page div.accordion-body > p:nth-child(1)').eq(1).should('be.visible')
      cy.get('section.careers-page div.accordion-body > div a').eq(1).should('be.visible')

      cy.visit('https://dev.innovuze.com/')
      cy.get('section.careers > div > div.background-green > div.container-fluid > div.row > div:nth-child(2) > div:nth-child(1) > a:nth-child(3)').invoke('removeAttr','target').click()
      cy.url().should('include', '#web-developer')
      cy.get('section.careers-page h2 > button').eq(2).contains('Web Developer');
      cy.get('section.careers-page div.accordion-body > p:nth-child(1)').eq(2).should('be.visible')
      cy.get('section.careers-page div.accordion-body > div a').eq(2).should('be.visible')

      cy.visit('https://dev.innovuze.com/')
      cy.get('section.careers > div > div.background-green > div.container-fluid > div.row > div:nth-child(2) > div:nth-child(1) > a:nth-child(4)').invoke('removeAttr','target').click()
      cy.url().should('include', '#devops-sysadmin')
      cy.get('section.careers-page h2 > button').eq(3).contains('DevOps / SysAdmin');
      cy.get('section.careers-page div.accordion-body > p:nth-child(1)').eq(3).should('be.visible')
      cy.get('section.careers-page div.accordion-body > div a').eq(3).should('be.visible')
    })
    it('Verify if "View Open Roles Here" Button is Working', () => {
      // Button should be visible and user will be redirected to: https://dev.innovuze.com/careers/ Showing all available roles
      cy.get('section.careers > div > div.background-green > div.container-fluid > div.row > div:nth-child(2) > div:nth-child(2) > a').click()
      cy.url().should('include', 'careers')
    })
    
    
    it('Verify "Apply for This Job" Button is Working', () => {
      // An Google Form should open with the Position Applied is Pre-filled with the Position Selected in the Website
      cy.get('section.careers > div > div.background-green > div.container-fluid > div.row > div:nth-child(2) > div:nth-child(2) > a').click()
      cy.url().should('include', 'careers')
      cy.get('section.careers-page h2 > button').eq(0).click()
      cy.get('section.careers-page div.accordion-body > div a').eq(0).invoke('removeAttr','target').click()
      cy.url().should('not.include', 'innovuze')
    })
    
    it('Verify Facebook Page Button', () => {
      // Facebook page should open : https://www.facebook.com/innovuzesolutions
      cy.get('section.careers > div > div.background-green > div.container-fluid > div.row > div:nth-child(2) > div:nth-child(2) > a').click()
      cy.get('section.careers-page a.job-posting-text').invoke('removeAttr','target').click()
      //cy.url().should('include', 'https://www.facebook.com/innovuzesolutions')
      cy.url().should('not.include', 'innovuze')
      cy.visit('https://dev.innovuze.com/')
    })
    
  })
  
  