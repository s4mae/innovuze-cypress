import ServicesPage from '../../pages/servicesPOM';
  
  describe('Dev Innovuze Services Page', () => {
    const servicesPage = new ServicesPage();
  
    beforeEach(() => {
      servicesPage.visit();
    });
    it('Verify if the Services Page contains all elements', () => {
        servicesPage.verifyServicesPageElements();
    });
    it.only('Verify if "Inquire Now" Button on Each Services is Working', () => {
        servicesPage.clickInquireNowButtons();
    });
    it('Verify the Our Tech Stack if Visible', () => {
        servicesPage.verifyTechStack();
    });
    it('Verify if "Get Started Here" button is working', () => {
        servicesPage.clickGetStartedButton();
    });
});
  