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
    cy.get('section.projects').should('be.visible').should('not.be.empty')
  })
  it('Verify if the Projects Page contains all elements', () => {
    // The Following Elements Should be Visible: "Our Work" Text, Carousel of Projects
    cy.url().should('include', '#projects')
    cy.get('section.projects > div.container-fluid > h2 > p').should('include.text','Our Work')
    cy.get('section.projects > div.container-fluid > div.container > div.projects-subtitle > p:nth-child(2)').should('not.be.empty')
    cy.get('section.projects > div.container-fluid > div:nth-child(3) > div.monitor > div.monitorWrapper').find('img').should('have.attr', 'src').and('include', '.png');
  })
  it('Verify if Carousel Links are Working', () => {
    // Page should redirect to the right website e.g. https://www.partsim.com/
    const urlsToVisit = ['https://www.eeweb.com/','https://www.partsim.com/','https://www.houseofjoycdo.org/','https://www.schematics.com/','https://www.calabrian-kids.org/'
    ];
      urlsToVisit.forEach((url) => {
        cy.get('section.projects div.insideMonitorImgOverlay a').trigger('mouseover', { force: true }).wait(urlsToVisit.indexOf(url) * 3000 + 3000) 
        .should('have.attr', 'href', url).should('not.be.empty').should('contain.text', 'Visit')
        .invoke('removeAttr', 'target').click({ force: true })
        cy.url().should('not.include', 'innovuze');
        cy.visit('dev.innovuze.com');
      });
  })
})

