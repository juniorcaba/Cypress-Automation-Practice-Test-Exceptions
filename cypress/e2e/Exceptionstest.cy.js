import ExceptionsPage from "../pages/ExceptionsPage";
import data from "../support/testData/exceptionsData";

describe('Exceptions Test ', () => {

    const exceptionsPage = new ExceptionsPage();

    beforeEach(() => {
        cy.visit('/');
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        Cypress.config('defaultCommandTimeout', 10000)
    });

    it('Test case 1: NoSuchElementException', () => {
        exceptionsPage.addButton().click();
        exceptionsPage.rowTwoField().should('be.visible')
    });

    it('Test case 2: ElementNotInteractableException', () => {
        exceptionsPage.addButton().click();
        exceptionsPage.rowTwoField().should('be.visible');
        exceptionsPage.rowTwoInput().type(data.newRow2);
        exceptionsPage.saveButtonRow2().should('be.visible');
        exceptionsPage.saveButtonRow2().click();
        exceptionsPage.rowTwoInput().should('have.value', data.newRow2)
    });

    it('Test case 3: InvalidElementStateException', () => {
        exceptionsPage.editButton().click();
        exceptionsPage.rowOneInput().clear();
        exceptionsPage.rowOneInput().type(data.newRow1);
        exceptionsPage.saveButtonRow1().click();
        exceptionsPage.rowOneInput().should('have.value', data.newRow1);
    });

    it('Test case 4: StaleElementReferenceException', () => {
        exceptionsPage.instructionsText().should('be.visible');
        exceptionsPage.addButton().click();
        exceptionsPage.rowTwoField().should('be.visible');
        exceptionsPage.instructionsText().should('not.exist');
    });
    
    it('Test case 5: TimeoutException', () => {
        exceptionsPage.addButton().click();
        exceptionsPage.rowTwoField().should('be.visible')
        exceptionsPage.rowTwoInput().should('be.visible');
    });
});