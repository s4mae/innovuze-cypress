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
        // check image redirect
        cy.get('section.blog').find('img').each(($el, index, $listofElements) => {
          cy.get('section.blog img').eq(index).click({force:true})
          cy.get('h2.blog-page-title').invoke('text').then((text) => {
            // Split the text into an array of words
            const firstwordsArray = text.split(/\s+/);
            // Join the first three words together
            const firstcombinedText = `${firstwordsArray[0]} ${firstwordsArray[1]} ${firstwordsArray[2]}`;
            // Log the result
            cy.log('Combined Text:', firstcombinedText);
           // Split the text into an array of words
           const secondwordsArray = text.split(/\s+/);
           // Join the first three words together
           const secondcombinedText = `${secondwordsArray[0]} ${secondwordsArray[1]} ${secondwordsArray[2]}`;
           // Log the result
           cy.wrap(secondcombinedText).should('eq',firstcombinedText)
         });
          cy.go('back')
        })
        // check title redirects
          cy.get('section.blog').find('h2.blog-title').each(($el, index, $listofElements) => {
            cy.get('section.blog h2.blog-title a').eq(index).click()
            cy.get('h2.blog-page-title').invoke('text').then((text) => {
               // Split the text into an array of words
               const firstwordsArray = text.split(/\s+/);
               // Join the first three words together
               const firstcombinedText = `${firstwordsArray[0]} ${firstwordsArray[1]} ${firstwordsArray[2]}`;
               // Log the result
               cy.log('Combined Text:', firstcombinedText);
              // Split the text into an array of words
              const secondwordsArray = text.split(/\s+/);
              // Join the first three words together
              const secondcombinedText = `${secondwordsArray[0]} ${secondwordsArray[1]} ${secondwordsArray[2]}`;
              // Log the result
              cy.wrap(secondcombinedText).should('eq',firstcombinedText)
            });
            cy.go('back')
      
            })
      // check latest blog title redirect
      cy.get('section.blog h2.latestBlog-title > a').click()
    })

    it('Verify if Read More Button is Working', () => {
      // check latest blog read more redirects
      cy.get('section.blog div.blogLatest-holder a.btn').click()
      cy.get('section.blog-page h1.section-title').should('be.visible').should('have.text','Blog')
    })

    it('Verify "More Blogs Here" button is working', () => {
      // Blog Page should open with a link: https://dev.innovuze.com/blog/ and should show all blogs
      cy.get('section.blog div.text-center a').click()
      cy.get('section.blog-page h1.section-title').should('be.visible').should('have.text','Blog').url().should('include', 'blog')
    })

    it.only('Verify Pagination is Working', () => {
      // Should display right page of the Blog Page
      cy.get('section.blog div.text-center a').click()
      // check next and back pagination
      cy.get('section.blog-page ul a').last().click()
      cy.get('section.blog-page').should('not.be.empty').get('section.blog-page h1').should('include.text','Blog').url().should('include','2')
      cy.get('section.blog-page ul a').first().click()
      cy.get('section.blog-page').should('not.be.empty').get('section.blog-page h1').should('include.text','Blog').url().should('include','')
      // check all pagination numbers
      cy.get('section.blog-page ul').find('a').each(($el, index, $listofElements) => {
      cy.get('section.blog-page ul a').eq(index).click()
      cy.log($el.text());
      if ($el.text() != 1){
        cy.url().should('include',$el.text()).get('section.blog-page').should('not.be.empty')
      }
      //cy.url().should('have.text',$el.text())
      })
    })

    it('Verify If First 10 Blogs Links are Working', () => {
      // Each blog should Open with the proper link
      cy.get('section.blog div.text-center a').click()
      // check blog image redirects
      cy.get('section.blog-page div.row').find('img').each(($el, index, $listofElements) => {
        cy.get('section.blog-page div.row img').eq(index).click({force:true})
        cy.get('h2.blog-page-title').invoke('text').then((text) => {
          // Split the text into an array of words
          const firstwordsArray = text.split(/\s+/);
          // Join the first three words together
          const firstcombinedText = `${firstwordsArray[0]} ${firstwordsArray[1]} ${firstwordsArray[2]}`;
          // Log the result
          cy.log('Combined Text:', firstcombinedText);
         // Split the text into an array of words
         const secondwordsArray = text.split(/\s+/);
         // Join the first three words together
         const secondcombinedText = `${secondwordsArray[0]} ${secondwordsArray[1]} ${secondwordsArray[2]}`;
         // Log the result
         cy.wrap(secondcombinedText).should('eq',firstcombinedText)
       });
        cy.go('back')
      })
    })
    
    it('Verify if Archive Selection is working', () => {
      // Page should show Blogs according to the selected Month/Year
      cy.get('section.blog div.text-center a').click()
      // check blog image redirects
      cy.get('section.blog-page div.archive div.archive-item').find('a').each(($el, index, $listofElements) => {
      cy.get('section.blog-page div.archive div.archive-item a').eq(index).click()
      //cy.get('section.blog-page ol.breadcrumb li.breadcrumb-item.active').first().invoke('text').should('contains.text',$el.text())
      cy.get('section.blog-page ol.breadcrumb li.breadcrumb-item.active').invoke('text').then((text) => {
        // Split the text into an array of words
        const wordsArray = text.split(/\s+/);
        // Extract the first three letters
        const firstThreeLetters = wordsArray[0].slice(0, 3);
        // Join the first three letters and the year back together
        const combinedText = `${firstThreeLetters} ${wordsArray[1]}`;
        // Log the result
        cy.log('Combined Text:', combinedText);
        cy.wrap(combinedText).should('eq',$el.text())
      });
      cy.go('back')

      })
    })
  })