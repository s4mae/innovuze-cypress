describe('Check the Blog', () => {
    beforeEach(() => {
        cy.visit('https://dev.innovuze.com')
    })

    it('Verify if the About Page contains all elements', () => {
        cy.get('.button-holder a').click(); //accept cookies
        cy.url().should("contain", "dev.innovuze.com")
        cy.get('#navbarTogglerDemo01 > ul > li:nth-child(6) > a').click({ force: true });
        cy.get('#blog > div > h2').should('contain', 'Blog');
        cy.get('.blogLatest-holder').scrollIntoView().should('be.visible');

    })

    // it('Verify If Clicking the Shown Blogs is Working', () => {
    //     cy.visit('https://dev.innovuze.com/#blog');
    //     cy.url().should("contain", "dev.innovuze.com/#blog");

    //     const selectImg = 4;

    //     for (let i = 0; i < selectImg; i++) { //remove the .wait
    //         cy.get(`#blog .blog-item img:eq(${i})`).click({ force: true }).should('be.visible').go(-1);
    //         cy.get(`#blog .blog-title a:eq(${i})`).click({ force: true }).should('be.visible').go(-1);
    //     }
    // })

    it('Verify If Clicking the Shown Blogs is Working', () => { //updated looping using each
        cy.get('.button-holder a').click(); //accept cookies
        cy.visit('https://dev.innovuze.com/#blog');
        cy.url().should("contain", "dev.innovuze.com/#blog");

        cy.get('#blog .blog-item img, #blog .blog-title a')
            .each(($element, index) => {
                cy.wrap($element).click({ force: true }).should('be.visible').go(-1);
            });
    });

    it('Verify "More Blogs Here" button is working', () => {
        cy.get('.button-holder a').click(); //accept cookies
        cy.url().should("contain", "dev.innovuze.com")
        cy.get('#blog .text-center a').click();
        cy.contains("h1", "Blog").should('be.visible');
        cy.url().should("contain", "https://dev.innovuze.com/blog/");

    })

    it('Verify Pagination is Working', () => {
        cy.get('.button-holder a').click(); // accept cookies
        cy.get('#blog .text-center a').click();
        cy.contains("h1", "Blog").should('be.visible');
        cy.url().should("contain", "https://dev.innovuze.com/blog");

        cy.get('#blog-page .blog-pagination li').each(($paginationLink, index) => {
            cy.wrap($paginationLink).click({ force: true });

            cy.get('#blog-page div.blog-page-list > div').should('be.visible');
        });
    });

    it('Verify If First 10 Blogs Links are Working', () => {
        cy.get('.button-holder a').click(); //accept cookies
        cy.url().should("contain", "dev.innovuze.com");
        cy.get('#blog .text-center a').click();
        cy.url().should("contain", "https://dev.innovuze.com/blog/");

        const blogLinks = [
            "https://dev.innovuze.com/blog/post/2023/11/riding-the-tech-rapids-a-recap-of-devfest-cagayan-de-oro-2023/",
            "https://dev.innovuze.com/blog/post/2023/6/innovuze-partners-with-buda-community-health-care-center/",
            "https://dev.innovuze.com/blog/post/2023/6/celebrating-10-years-of-innovation-innovuze-solutions-inc-s-unforgettable-team-building-event/",
            "https://dev.innovuze.com/blog/post/2022/5/admin-dits-mini-team-building/",
            "https://dev.innovuze.com/blog/post/2022/5/advance-excel-google-sheets-training/",
            "https://dev.innovuze.com/blog/post/2022/4/pm-and-digital-marketing-micro-team-building-2022/",
            "https://dev.innovuze.com/blog/post/2022/4/get-creative-with-canva/",
            "https://dev.innovuze.com/blog/post/2022/4/agile-methodology-virtual-seminar/",
            "https://dev.innovuze.com/blog/post/2022/4/email-etiquette-virtual-seminar/",
            "https://dev.innovuze.com/blog/post/2022/3/uiux-virtual-seminar/"
        ];

        for (let i = 0; i < blogLinks.length; i++) {
            cy.get(`#blog-page > div h2 a`).eq(i).click({ force: true });
            cy.url().should("contain", blogLinks[i]).go('back');
        }
    });


    it('Verify if Archive Selection is working', () => {
        cy.get('.button-holder a').click(); //accept cookies
        cy.get('#navbarTogglerDemo01 >ul  li:nth-child(6)').click();
        cy.get('#blog .text-center a').click();

        const archive = 24;

        for (let i = 0; i < archive; i++) {
            cy.get(`.archive a:eq(${i})`).should('be.visible').click({ force: true }).wait(700); //improve the selector
        }
    })
    it.only('Verify if Read More Button is Working', () => {
        cy.get('.button-holder a').click(); //accept cookies
        cy.url().should("contain", "dev.innovuze.com")
        cy.get('#navbarTogglerDemo01 >ul  li:nth-child(6)').click();
        cy.url().should("contain", "dev.innovuze.com/#blog");

        cy.get('#blog .latestBlog-title a').click();
        cy.url().should("contain", "dev.innovuze.com/blog/");
        cy.contains("h1", "Blog").should('be.visible');
    })

})
