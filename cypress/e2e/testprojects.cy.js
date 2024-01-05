describe('Testing Projects Tab from Innovuze Solutions Inc.', () => {
  // Testing Projects Tab
  beforeEach(() => {
    // visit the dev stage of innovuze website and click projects tab before each test
    cy.visit('https://dev.innovuze.com/')
    cy.get('div.cookie-banner div.button-holder a').click()
    cy.get('ul.navbar-nav>li:nth-child(4)').click()
  })

  it('Verifying Projects Tab Works on Click', () => {
    // page should be redirected to https://dev.innovuze.com/#projects
    cy.url().should('include', '#projects')
  })
  it('Verify if the Projects Page contains all elements', () => {
    // The Following Elements Should be Visible: "Our Work" Text, Carousel of Projects
    cy.get('section.projects > div.container-fluid > h2 > p').contains('Our Work')
    cy.get('section.projects > div.container-fluid > div.container > div.projects-subtitle > p').contains('A roster of some of our projects with local and global companies and organizations in different industries such as electronics, real estate, F&B, healthcare, and non-profit sector.')
    cy.get('section.projects > div.container-fluid > div:nth-child(3) > div.monitor > div.monitorWrapper').find('img').should('have.attr', 'src').and('include', '.png');
  })
  it.only('Verify if Carousel Links are Working', () => {
    // Page should redirect to the right website e.g. https://www.partsim.com/
    //cy.get('section.projects div.insideMonitorImgOverlay').find('a').invoke('removeAttr', 'target').click({force:true})
    //cy.url().should('not.include','innovuze')
    cy.get('section.projects div.insideMonitorImgOverlay a')
  .trigger('mouseover', { force: true })
  .should('have.attr', 'href', 'https://www.eeweb.com/')
  .should('contain.text', 'Visit') // Assuming the button text is 'Visit'
  .wait(4000)
  .invoke('removeAttr','target')
  .click({ force: true });
  cy.url().should('not.include','innovuze')
  })
})

