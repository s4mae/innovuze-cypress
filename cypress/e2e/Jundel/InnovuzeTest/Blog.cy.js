import BlogPage from "../../../pages/Blog";

describe('Check the Blog', () => {
    const blogPage = new BlogPage();

    beforeEach(() => {
        blogPage.visitBlogPage();
    });

    it('Verify if the About Page contains all elements', () => {
        blogPage.clickMoreBlogsButton();
    });

    it('Verify If Clicking the Shown Blogs is Working', () => {
        blogPage.clickShownBlogs();
    });

    it('Verify "More Blogs Here" button is working', () => {
        blogPage.clickMoreBlogsButton();
    });

    it('Verify Pagination is Working', () => {
        blogPage.verifyPagination();
    });

    it('Verify If First 10 Blogs Links are Working', () => {
        blogPage.clickFirst10BlogsLinks();
    });

    it('Verify if Archive Selection is working', () => {
        blogPage.selectArchive();
    });

    it('Verify if Read More Button is Working', () => {
        blogPage.clickReadMoreButton();
    });
});