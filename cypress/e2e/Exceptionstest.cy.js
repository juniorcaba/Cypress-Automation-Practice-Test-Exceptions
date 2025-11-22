import ExceptionsPage from "../pages/ExceptionsPage";

describe('Exceptions Test ', () => {

    const exceptionsPage = new ExceptionsPage();

    beforeEach(() => {
        cy.visit('/');
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        Cypress.config('defaultCommandTimeout', 10000)
    });

    it.only('Test case 1: NoSuchElementException', () => {
        exceptionsPage.addButton().click();
        exceptionsPage.rowTwoField().should('be.visible')
    });

    it('Test case 2: ElementNotInteractableException', () => {
        exceptionsPage.addButton().click();
        exceptionsPage.rowTwoField().should('be.visible');
    });

});