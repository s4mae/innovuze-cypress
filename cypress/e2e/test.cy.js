import ToolsActions from "../pages/WebActions";

const rf = new ToolsActions();

describe('Tabs Values Persistence', () => {
  beforeEach(() => {
    cy.visit("/en-us/tools/rf-inductor-finder/#/search")
    cy.get('.hd-logo')
      .should('have.attr', 'href')
      .and('eq', '/')
  })
  it.only('Verify Frequency present in other tab', () => {
    rf.insertValue('#Frequency','#QMin','50')
    rf.getTabButton(1).click()
    rf.getInputs('#Frequency').should('eq', '50')
    rf.getTabButton(2).click()
    rf.getInputs('#FrequencyLower').should('eq', '50')
    rf.getTabButton(3).click()
    rf.getInputs('#Frequency').should('eq', '50')
  })
  it('Verify Inductance present in other tab', () =>{
    rf.insertValue('#InductanceLower','#InductanceUpper','1')
    rf.insertValue('#InductanceUpper','#InductanceLower','50')
    rf.getTabButton(1).click()
    rf.getInputs('#InductanceLower').should('eq', '1')
    rf.getInputs('#InductanceUpper').should('eq', '50')
  })
})