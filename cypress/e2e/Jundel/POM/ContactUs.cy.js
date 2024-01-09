import ContactUsPage from "../../pages/ContactUs";

describe('Check the Contact Us', () => {
    const contactUsPage = new ContactUsPage();

    beforeEach(() => {
        contactUsPage.visit();
    });

    it('Verify Contact Us Modal Contains All Elements', () => {
        contactUsPage.openContactUsModal();
        contactUsPage.verifyContactUsModalElements();
    });

    it('Verify Contact Us Function if Field/s Are Empty', () => {
        contactUsPage.openContactUsModal();
        contactUsPage.verifyContactUsFunctionEmptyFields();
    });

    it('Verify Invalid Email Error is Working', () => {
        contactUsPage.openContactUsModal();
        contactUsPage.verifyInvalidEmailError();
    });

    it('Verify Require Fields is Working', () => {
        contactUsPage.openContactUsModal();
        contactUsPage.verifyRequireFieldsError();
    });

    it('Verify Contact Us is Working', () => {
        contactUsPage.openContactUsModal();
        contactUsPage.fillAndSubmitContactForm('hello world', 'jundel@gmail.com', 'hello world', 'test message');
    });
});
