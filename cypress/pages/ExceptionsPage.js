class ExceptionsPage{

rowOneField = () => cy.get('#row1'); 

rowOneInput = () => cy.get('#row1 .input-field'); 

rowTwoField = () => cy.get('#row2');

rowTwoInput = () => cy.get('#row2 .input-field');

addButton = () => cy.get('#add_btn');

saveButtonRow1 = () => cy.get('#row1 #save_btn');

saveButtonRow2 = () => cy.get('#row2 #save_btn');

removeButton = () => cy.get('#remove_btn');

editButton = () => cy.get('#edit_btn')

instructionsText = () => cy.get('#instructions')

}

export default ExceptionsPage;