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
        // check image redirect
        cy.get('section.blog').find('img').each(($el, index, $listofElements) => {
            cy.get('section.blog img').eq(index).click({force:true})
            cy.go('back')
          }
        )
        // check title redirects
        cy.get('section.blog').find('h2.blog-title').each(($el, index, $listofElements) => {
          cy.get('section.blog h2.blog-title a').eq(index).click()
  
            const currentText = $el.text();
          
            cy.get('h2.blog-page-title').eq(0).invoke('text').then((blogPageTitle) => {
              const wordsArray = currentText.split(/\s+/);
          
              // Check if at least one word from currentText is present in the blog page title
              const isAtLeastOneWordPresent = wordsArray.some((word) => blogPageTitle.includes(word));
          
              // Assert that at least one word from currentText is present in the blog page title
              expect(isAtLeastOneWordPresent, `Expected "${blogPageTitle}" to include at least one word from "${currentText}"`).to.be.true;
            });
          
            cy.go('back');
          });
      // check latest blog title redirect
      cy.get('section.blog h2.latestBlog-title > a').click()
    })
    it('Verify if Read More Button is Working', () => {
      // check latest blog read more redirects
      cy.get('section.blog div.blogLatest-holder a.btn').click()
    })
    
  })