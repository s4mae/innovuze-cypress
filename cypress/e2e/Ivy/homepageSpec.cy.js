import HomePage from '../../pages/homepagePOM';

describe('Dev Innovuze Homepage', () => {
  const homePage = new HomePage();

  beforeEach(() => {
    homePage.visit();
  });

  it('Verify all the navbar', () => {
    homePage.verifyNavbarElements('click');
  });

  it('Verify if homepage contains all elements', () => {
    homePage.verifyHomepageElements();
  });

  it('Verify if Hover Action on the ISI Logo is Working', () => {
    homePage.clickISILogo();
  });

  it('Verify if Lets Talk Button is Working', () => {
    homePage.clickLetsTalkButton();
  });

  it('Verify if Join Our team is Working', () => {
    homePage.clickJoinOurTeam();
  });
});
