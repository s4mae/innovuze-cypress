describe('Testing Blogs Tab from Innovuze Solutions Inc.', () => {
    // Testing Projects Tab
    beforeEach(() => {
      // visit the dev stage of innovuze website and click projects tab before each test
      cy.visit('https://dev.innovuze.com/')
      cy.get('div.cookie-banner div.button-holder a').click()
      cy.get('ul.navbar-nav>li:nth-child(6)').click()
    })
  
    it('Verifying Blogs Tab Works on Click', () => {
      // page should be redirected to https://dev.innovuze.com/#projects
      cy.url().should('include', '#blog')
    })

    it('Verify if the Blog Page contains all elements', () => {
        // The Following Elements Should be Visible: "Blog" Text Recently Added Blogs
        cy.get('section.blog > div.container-lg > h2').should('be.visible').should('include.text', 'Blog')
        cy.get('section.blog div.row').should('be.visible').should('not.be.empty')
      })

      it('Verify If Clicking the Shown Blogs is Working', () => {
        // Should Redirect to the blog page
        //cy.get('section.blog').should('be.visible').click()
        cy.get('section.blog').find('img').its('length').should('eq', 5)
        cy.get('section.blog').find('img').its('length').should('have.length', 3)
        .each(($li, index, '$lis') => {
            return 'something else'
        })
        .then(($lis) => {
            expect($lis).to.have.length(3) // true
        })
      })
    
  })
  
  