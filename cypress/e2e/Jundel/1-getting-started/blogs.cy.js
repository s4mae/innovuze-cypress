/// <reference types="Cypress" />

// Describe block for the test suite named 'Innovuze Website Test'
describe('Innovuze Website Test', () => {

    // Test case named 'Verify Blog'
    it('Verify the url', () => {
        // Open the Innovuze website
        cy.visit('https://dev.innovuze.com/')
        // Verify that the URL contains "innovuze.com"
        cy.url().should("contain", "dev.innovuze.com")
    });

    // it('Verify Blog button', () => {
    //     cy.visit('https://dev.innovuze.com/')
    //     cy.url().should("contain", "dev.innovuze.com")

    //     // Scroll into view and click on the 'Blog' section
    //     cy.get('#navbarTogglerDemo01 > ul > li.nav-item.active-menu > a').scrollIntoView();
    //     cy.contains('Blog').should('be.visible').click();
    // });

    // it('Verify Blog button', () => {
    //     const numServices = 5;

    //     for (let i = 0; i < numServices; i++) {
    //         cy.get(`#blog > div > div > div.col-sm-12.col-md-6.order-last.order-sm-last.order-md-first.align-self-center.blog-list-wrapper > div.blog-list > div:nth-child(1) > div > div.col-sm-5 > div > a > img:eq(${i})`).should('be.visible').click({ force: true });
    //         cy.go(-1);
    //         cy.get(`#blog > div > div > div.col-sm-12.col-md-6.order-last.order-sm-last.order-md-first.align-self-center.blog-list-wrapper > div.blog-list > div:nth-child(1) > div > div.col-sm-7 > h2 > a:eq(${i})`).should('be.visible').click({ force: true });
    //         cy.go(-1);
    //         cy.get(`#blog > div > div > div.col-sm-12.col-md-6.order-last.order-sm-last.order-md-first.align-self-center.blog-list-wrapper > div.blog-list > div:nth-child(1) > div > div.col-sm-7 > div:eq(${i})`).should('be.visible');
    //         // cy.get(`#services .row > div > .btn-inquireNow-wrapper a:eq(${i})`).click({ force: true });
    //         // cy.get('.modal-content > .modal-body > .btn-close-wrapper').click({ force: true });
    //     }
    // });
    // it('Verify latest blog post', () => {
    //     cy.visit('https://dev.innovuze.com/')
    //     cy.url().should("contain", "dev.innovuze.com")

    //     // Click on the latest blog post's image and go back
    //     cy.get('.container-lg > .row > .col-sm-12 > .blog-list  img:nth-child(1)').eq(1).should('be.visible').click({ force: true });
    //     // cy.go(-1); // command is used to navigate back in the browser's history. 

    //     // Click on the latest blog post's title and go back
    //     cy.get('.container-lg > .row > .col-sm-12  >  .blog-list  a:nth-child(3)').eq(3).should('be.visible')
    //         .contains('Riding the Tech Rapids: A Recap of DevFest Cagayan de Oro 2023')
    //         .click();
    //     // cy.go(-1);

    //     // Click on the 'Read More' button and go back
    //     cy.get('.container-lg > .row > .col-sm-12  >  .blog-list  a').eq(2).should('be.visible').click();
    //     // cy.go(-1);
    // });

    // // Click on the second blog post's image and go back
    // cy.get('.blogImgThumb').should('be.visible').click();
    // cy.go(-1);

    // // Click on the second blog post's title and go back
    // cy.get('.blog-title').should('be.visible')
    //     .contains('Innovuze partners with BUDA Community Health Care Center')
    //     .click();
    // cy.go(-1);

    // // Click on the second blog post's image (using eq(1)) and go back
    // cy.get('.blogImgThumb').eq(1).should('be.visible').click();
    // cy.go(-1);

    // // Click on the category link and go back
    // cy.get('.blog-category').should('be.visible').click();
    // cy.go(-1);

    // // Click on the third blog post's title and go back
    // cy.get('.blog-title').eq(1).should('be.visible')
    //     .contains('Celebrating 10 Years of Innovation: Innovuze Solutions, Inc')
    //     .click();
    // cy.go(-1);

    // // Click on the third blog post's image (using eq(2)) and go back
    // cy.get('.blogImgThumb').eq(2).should('be.visible').click();
    // cy.go(-1);

    // // Click on the category link (using eq(1)) and go back
    // cy.get('.blog-category').eq(1).should('be.visible').click();
    // cy.go(-1);

    // // Click on the fourth blog post's title and go back
    // cy.get('.blog-title').eq(2).should('be.visible')
    //     .contains('Breaking Barriers and Building Connections: Highlights from . . .')
    //     .click();
    // cy.go(-1);

    // // Click on the fourth blog post's image (using eq(3)) and go back
    // cy.get('.blogImgThumb').eq(3).should('be.visible').click();
    // cy.go(-1);

    // // Click on the category link (using eq(2)) and go back
    // cy.get('.blog-category').eq(2).should('be.visible').click();
    // cy.go(-1);

    // // Click on the fifth blog post's title and go back
    // cy.get('.blog-title').eq(3).should('be.visible')
    //     .contains('Stay Ahead of the Game: The Importance of Regular Software . . .')
    //     .click();
    // cy.go(-1);


    // Test case named 'Verify Blog'
    it('Verify if the About Page contains all elements', () => {
        // Open the Innovuze website
        cy.visit('https://dev.innovuze.com/')
        // Verify that the URL contains "innovuze.com"
        cy.url().should("contain", "dev.innovuze.com")

        cy.get('#navbarTogglerDemo01 > ul > li:nth-child(6) > a').click({ force: true });
        cy.get('#blog').should('have.class', 'blogLatest-holder')

        



    });


});
