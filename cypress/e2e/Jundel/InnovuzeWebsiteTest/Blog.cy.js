describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('https://dev.innovuze.com')
    })


    it('Verify if the About Page contains all elements', () => {

        cy.url().should("contain", "dev.innovuze.com")

        cy.get('#navbarTogglerDemo01 > ul > li:nth-child(6) > a').click({ force: true });
        cy.get('#blog').contains('Riding the Tech Rapids: A Recap of DevFest Cagayan de Oro 2023')

    })
    it('Verify If Clicking the Shown Blogs is Working', () => {
        cy.visit('https://dev.innovuze.com/#blog');
        cy.url().should("contain", "dev.innovuze.com/#blog");

        const numServices = 4;

        for (let i = 0; i < numServices; i++) {
            cy.get(`#blog .row  > div > .blog-list > div > .row img:eq(${i})`).click({ force: true });
            cy.wait(700)
            cy.go(-1);
            cy.get(`#blog .row > div > .blog-list > div > .row > div > h2 a:eq(${i})`).click({ force: true });
            cy.wait(700)
            cy.go(-1);

        }

    })

    it('Verify "More Blogs Here" button is working', () => {
        cy.get('#blog .row > div > .text-center a').click();
        cy.url().should("contain", "https://dev.innovuze.com/blog/")

    })

    it('Verify if Archive Selection is working', () => {
        cy.get('div#navbarTogglerDemo01 >ul  li:nth-child(6)').click();
        cy.get('#blog .row > div > .text-center a').click();

        const numServices = 24;

        for (let i = 0; i < numServices; i++) {
            cy.get(`#blog-page > div > div > div.col-12.col-sm-12.col-md-3.col-lg-3.archive-wrapper a:eq(${i})`).click({ force: true });
            cy.wait(700)
        }

    })


    it('Verify Pagination is Working', () => {
        cy.get('#blog > div > div > div.col-sm-12.col-md-6.order-first.order-sm-first > div > a').click();
        cy.url().should("contain", "https://dev.innovuze.com/blog/")

    })


})