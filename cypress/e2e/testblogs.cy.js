import POM from '../pages/WebActions';


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
      cy.get('section.blog').should('be.visible').should('not.be.empty')
    })

    it('Verify if the Blog Page contains all elements', () => {
        // The Following Elements Should be Visible: "Blog" Text Recently Added Blogs
        cy.get('section.blog > div.container-lg > h2').should('be.visible').should('include.text', 'Blog')
        cy.get('section.blog-page div.container-lg div.row.blog-page-wrapper div:nth-child(1)').should('not.be.empty')
        cy.url().should('include', 'blog')
      })

    it('Verify If Clicking the Shown Blogs is Working', () => {
        // Should Redirect to the blog page
        // check image redirect
        cy.get('section.blog').find('img').each(($el, index, $listofElements) => {
          cy.get('section.blog img').eq(index).click()
          POM.getFirstThreeWords('h2.blog-page-title').then((firstCombinedText) => {
            POM.getFirstThreeWords('h2.blog-page-title').then((secondCombinedText) => {
            cy.wrap(secondCombinedText).should('eq',firstCombinedText)
            cy.get('section.blog-page div.container-lg div.row.blog-page-wrapper div:nth-child(1)').should('be.visible').should('not.be.empty')
            POM.getFirstWord('h2.blog-page-title').then((firstword) => {cy.url().should('include',firstword)});
            cy.go('back')
           });
         });
        })
        // // check title redirects
          cy.get('section.blog').find('h2.blog-title').each(($el, index, $listofElements) => {
            cy.get('section.blog h2.blog-title a').eq(index).click()
            POM.getFirstThreeWords('h2.blog-page-title').then((firstCombinedText) => {
              POM.getFirstThreeWords('h2.blog-page-title').then((secondCombinedText) => {
              cy.wrap(secondCombinedText).should('eq',firstCombinedText)
              cy.get('section.blog-page div.container-lg div.row.blog-page-wrapper div:nth-child(1)').should('be.visible').should('not.be.empty')
              POM.getFirstWord('h2.blog-page-title').then((firstword) => {cy.url().should('include',firstword)});
              cy.go('back')
             });
           });
        })
      // check latest blog title redirect
      POM.getFirstThreeWords('h2.latestBlog-title').then((firstCombinedText) => {
      cy.get('section.blog h2.latestBlog-title > a').click()
        POM.getFirstThreeWords('h2.blog-page-title').then((secondCombinedText) => {
        cy.wrap(secondCombinedText).should('eq',firstCombinedText)
        cy.get('section.blog-page div.container-lg div.row.blog-page-wrapper div:nth-child(1)').should('be.visible').should('not.be.empty')
        POM.getFirstWord('h2.blog-page-title').then((firstword) => {cy.url().should('include',firstword)});
        cy.go('back')
       });
     });
    })

    it('Verify if Read More Button is Working', () => {
      // check latest blog read more redirects
      cy.get('section.blog div.blogLatest-holder a.btn').click()
      cy.get('section.blog-page h1.section-title').should('be.visible').should('have.text','Blog')
      POM.getFirstWord('h2.blog-page-title').then((firstword) => {cy.url().should('include',firstword)});
      //cy.url().should('include')
    })

    it('Verify "More Blogs Here" button is working', () => {
      // Blog Page should open with a link: https://dev.innovuze.com/blog/ and should show all blogs
      cy.get('section.blog div.text-center a').click()
      cy.get('section.blog-page h1.section-title').should('be.visible').should('be.visible').should('have.text','Blog').url().should('include', 'blog')
    })

    it('Verify Pagination is Working', () => {
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
      cy.get('section.blog-page').find('h2.blog-page-title').each(($el, index, $listOfElements) => {
        cy.get('section.blog-page div.row img').eq(index).click()
        POM.getFirstThreeWords('section.blog-page h2.blog-page-title').then((firstCombinedText) => {
          POM.getFirstThreeWords('h2.blog-page-title').then((secondCombinedText) => {
            cy.wrap(secondCombinedText).should('eq', firstCombinedText)
            cy.get('div.blog-page-content-wrapper').should('be.visible').should('not.be.empty');
            POM.getFirstWord('h2.blog-page-title').then((firstword) => {cy.url().should('include',firstword)});
            cy.go('back');
          });
        });
      });
    })
    
    it('Verify if Archive Selection is working', () => {
      // Page should show Blogs according to the selected Month/Year
      cy.get('section.blog div.text-center a').click()
      // check blog image redirects
      cy.get('section.blog-page div.archive div.archive-item').find('a').each(($el, index, $listofElements) => {
      cy.get('section.blog-page div.archive div.archive-item a').eq(index).click()
      POM.getFirstThreeLetters('section.blog-page ol.breadcrumb li.breadcrumb-item.active').then((combinedText) => {
        cy.wrap(combinedText).should('eq',$el.text())
        // add url assertion here
      });
      cy.go('back')

      })
    })
  })