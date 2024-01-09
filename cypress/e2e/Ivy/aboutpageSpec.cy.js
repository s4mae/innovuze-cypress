import AboutPage from '../../pages/aboutPOM';

describe('Dev Innovuze About Page', () => {
  const aboutPage = new AboutPage();

  beforeEach(() => {
    aboutPage.visit();
  });

  it('Verify if the About Page contains all elements', () => {
    aboutPage.verifyAboutPageElements();
  });

  it('Verify if Join Our Team Button Works', () => {
    aboutPage.clickJoinOurTeamButton();
  });

  it('Verify the Careers', () => {
    aboutPage.verifyCareersSection();
  });
});
