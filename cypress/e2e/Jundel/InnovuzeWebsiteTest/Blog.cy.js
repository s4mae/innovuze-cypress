describe('Check the Blog', () => {
    beforeEach(() => {
        cy.visit('https://dev.innovuze.com')
    })

    it('Verify if the About Page contains all elements', () => {
        cy.url().should("contain", "dev.innovuze.com")
        cy.get('#navbarTogglerDemo01 > ul > li:nth-child(6) > a').click({ force: true });
        // cy.get('section#blog').contains('Blog').and("contain", "#blog > div > div > div.col-sm-12.col-md-6.order-first.order-sm-first.order-md-last.latestBlog > div").should('be.visible');

    })

    it('Verify If Clicking the Shown Blogs is Working', () => {
        cy.visit('https://dev.innovuze.com/#blog');
        cy.url().should("contain", "dev.innovuze.com/#blog");

        const selectImg = 4;

        for (let i = 0; i < selectImg; i++) {
            cy.get(`#blog .row  > div > .blog-list > div > .row img:eq(${i})`).click({ force: true }).wait(700).go(-1);
            cy.get(`#blog .row > div > .blog-list > div > .row > div > h2 a:eq(${i})`).click({ force: true }).wait(700).go(-1);
        }
    })

    it('Verify "More Blogs Here" button is working', () => {
        cy.get('#blog .row > div > .text-center a').click();
        cy.url().should("contain", "https://dev.innovuze.com/blog/");

    })

    it('Verify If First 10 Blogs Links are Working', () => {
        cy.url().should("contain", "dev.innovuze.com")
        cy.get('#blog .row > div > .text-center a').click();
        cy.url().should("contain", "https://dev.innovuze.com/blog/");

        cy.get('#blog-page > div h2 a').eq(0).click({ force: true });
        cy.url().should("contain", "https://dev.innovuze.com/blog/post/2023/11/riding-the-tech-rapids-a-recap-of-devfest-cagayan-de-oro-2023/").go('back');
        cy.get('#blog-page > div h2 a').eq(1).click({ force: true });
        cy.url().should("contain", "https://dev.innovuze.com/blog/post/2023/6/innovuze-partners-with-buda-community-health-care-center/").go('back');
        cy.get('#blog-page > div h2 a').eq(2).click({ force: true });
        cy.url().should("contain", "https://dev.innovuze.com/blog/post/2023/6/celebrating-10-years-of-innovation-innovuze-solutions-inc-s-unforgettable-team-building-event/").go('back');
        cy.get('#blog-page > div h2 a').eq(3).click({ force: true });
        cy.url().should("contain", "https://dev.innovuze.com/blog/post/2022/5/admin-dits-mini-team-building/").go('back');
        cy.get('#blog-page > div h2 a').eq(4).click({ force: true });
        cy.url().should("contain", "https://dev.innovuze.com/blog/post/2022/5/advance-excel-google-sheets-training/").go('back');
        cy.get('#blog-page > div h2 a').eq(5).click({ force: true });
        cy.url().should("contain", "https://dev.innovuze.com/blog/post/2022/4/pm-and-digital-marketing-micro-team-building-2022/").go('back');
        cy.get('#blog-page > div h2 a').eq(6).click({ force: true });
        cy.url().should("contain", "https://dev.innovuze.com/blog/post/2022/4/get-creative-with-canva/").go('back');
        cy.get('#blog-page > div h2 a').eq(7).click({ force: true });
        cy.url().should("contain", "https://dev.innovuze.com/blog/post/2022/4/agile-methodology-virtual-seminar/").go('back');
        cy.get('#blog-page > div h2 a').eq(8).click({ force: true });
        cy.url().should("contain", "https://dev.innovuze.com/blog/post/2022/4/email-etiquette-virtual-seminar/").go('back');
        cy.get('#blog-page > div h2 a').eq(9).click({ force: true });
        cy.url().should("contain", "https://dev.innovuze.com/blog/post/2022/3/uiux-virtual-seminar/").go('back');

    })

    it('Verify if Archive Selection is working', () => {
        cy.get('div#navbarTogglerDemo01 >ul  li:nth-child(6)').click();
        cy.get('#blog > div > div > div > div.text-center > a').click();

        const archive = 24;

        for (let i = 0; i < archive; i++) {
            cy.get(`#blog-page > div > div > div.col-12.col-sm-12.col-md-3.col-lg-3.archive-wrapper a:eq(${i})`).click({ force: true }).wait(700);
        }
    })
    it.only('Verify if Read More Button is Working', () => {
        cy.url().should("contain", "dev.innovuze.com")
        cy.get('div#navbarTogglerDemo01 >ul  li:nth-child(6)').click();
        cy.url().should("contain", "dev.innovuze.com/#blog");

        cy.get('section#blog > div .blogLatest-holder a').eq(2).click();
        cy.url().should("contain", "dev.innovuze.com/blog/");
        cy.contains("h1", "Blog").should('be.visible');
    })

})