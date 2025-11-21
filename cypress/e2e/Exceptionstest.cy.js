import ExceptionsPage from "../pages/ExceptionsPage";

describe('Exceptions Test ', () => {

    const exceptionsPage = new ExceptionsPage();

    beforeEach(() => {
        cy.visit('/');
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });

    it('Test case 1: NoSuchElementException', () => {
        exceptionsPage.addButton().click();
        exceptionsPage.rowTwoField().should('be.visible');    
    });








});