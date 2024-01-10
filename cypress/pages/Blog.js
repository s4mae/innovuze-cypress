class BlogPage {
    visitBlogPage() {
        cy.visit('https://dev.innovuze.com');
        cy.get('.button-holder a').click(); // Accept cookies
        cy.url().should("contain", "dev.innovuze.com");
        cy.get('#navbarTogglerDemo01 > ul > li:nth-child(6) > a').click({ force: true });
        cy.get('#blog > div > h2').should('contain', 'Blog');
    }

    clickShownBlogs() {
        cy.visit('https://dev.innovuze.com/#blog');
        cy.url().should("contain", "dev.innovuze.com/#blog");

        const selectImg = 4;

        for (let i = 0; i < selectImg.length; i++) { //remove the .wait
            cy.get(`#blog .blog-item img:eq(${i})`).click({ force: true }).should('be.visible').go(-1);
            cy.get(`#blog .blog-title a:eq(${i})`).click({ force: true }).should('be.visible').go(-1);
        }
    }

    clickMoreBlogsButton() {
        cy.get('#blog .text-center a').click();
        cy.contains("h1", "Blog").should('be.visible');
        cy.url().should("contain", "https://dev.innovuze.com/blog/");
    }

    verifyPagination() {
        cy.get('.button-holder a').click({ force: true }); // accept cookies
        cy.get('#blog .text-center a').click();
        cy.contains("h1", "Blog").should('be.visible');
        cy.url().should("contain", "https://dev.innovuze.com/blog");

        cy.get('#blog-page .blog-pagination li').each(($paginationLink, index) => {
            cy.wrap($paginationLink).click({ force: true });

            cy.get('#blog-page div.blog-page-list > div').should('be.visible');
        })
    }

    clickFirst10BlogsLinks() {
        cy.get('.button-holder a').click({ force: true }); //accept cookies
        cy.url().should("contain", "dev.innovuze.com");
        cy.get('#blog .text-center a').click({ force: true });
        cy.url().should("contain", "https://dev.innovuze.com/blog/");

        const blogLinks = [
            "https://dev.innovuze.com/blog/post/2023/11/riding-the-tech-rapids-a-recap-of-devfest-cagayan-de-oro-2023/",
        ];

        for (let i = 0; i < blogLinks.length; i++) {
            cy.get(`#blog-page > div h2 a`).eq(i).click({ force: true });
            cy.url().should("contain", blogLinks[i]).go('back');
        }
    }

    selectArchive() {
        cy.get('.button-holder a').click({ force: true }); //accept cookies
        cy.get('#navbarTogglerDemo01 >ul  li:nth-child(6)').click({ force: true });
        cy.get('#blog .text-center a').click({ force: true });

        const archive = 24;
        for (let i = 0; i < archive; i++) {
            cy.get(`.archive a:eq(${i})`).should('be.visible').click({ force: true });
        }
    }
    clickReadMoreButton() {
        cy.url().should("contain", "dev.innovuze.com");
        cy.get('#navbarTogglerDemo01 >ul li:nth-child(6)').click();
        cy.url().should("contain", "dev.innovuze.com/#blog");

        cy.get('#blog .latestBlog-title a').click();
        cy.url().should("contain", "dev.innovuze.com/blog/");
        cy.contains("h1", "Blog").should('be.visible');
    }
}

export default BlogPage;