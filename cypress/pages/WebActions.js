class WebActions{
    getTabButton(index){
        return cy.get('button.tt-tab_button').eq(index)
    }
    getElement(field){
        return cy.get(field).should('be.visible')
                 .invoke('text')
                 .then((text) => {
                     const trimmedText = text.trim();
                     return trimmedText;
                 });
     }
    getInputs(field){
        return cy.get(field)
        .should('be.visible')
        .invoke('val')
        .then((value) => {
          return value;
        });
    }
    insertValue(field, nxtfield, value){
        if(value == ''){
            cy.get(field).clear()
        }else{
            cy.get(field).clear().type(value);
        }
        cy.get(nxtfield).click();
    }
}

module.exports = WebActions