class ExceptionsPage{

rowOneField = () => cy.get('#row1'); 

rowTwoField = () => cy.get('#row2 .input-field');

addButton = () => cy.get('#add_btn');

saveButton = () => cy.get('#save_btn');

removeButton = () => cy.get('#remove_btn');

}

export default ExceptionsPage;