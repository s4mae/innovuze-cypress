describe('example to-do app', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
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
            // cy.get(`#blog .row > div > .blogLatest-holder > .latestBlogImg-holder img:eq(${i})`).click({ force: true });
            // cy.go('back')
        }

    })
})