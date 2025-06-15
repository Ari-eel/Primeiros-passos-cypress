class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: ".oxd-date-input",
            submitButton: ".orangehrm-left-space[type='submit']",
            comboboxButton: ".oxd-select-text--active",
        } 

        return selectors
    }
    
    fillPersonalDetails(Firstname, Lastname){
        cy.get(this.selectorsList().firstNameField).clear().type(Firstname)
        cy.get(this.selectorsList().lastNameField).clear().type(Lastname)
        }
    fillEmployeeDetails(EmpIdTest, OtherIdTest, DriversLicenseDate, ssnNumber, sinNumber){
        cy.get(this.selectorsList().genericField).eq(3).clear().type(EmpIdTest)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(OtherIdTest)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(DriversLicenseDate)
        cy.get(this.selectorsList().dateField).eq(0).clear().click().type(ssnNumber)
        cy.get(this.selectorsList().dateField).eq(1).clear().click().type(sinNumber)
    } 
    saveForm(){
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get(this.selectorsList().submitButton).eq(1).click()
        cy.get('body').should('contain','Successfully Updated')
    }
    fillStatus(){
        cy.get(this.selectorsList().comboboxButton).eq(0).click()
        cy.get('.oxd-select-dropdown').contains('Brazilian').click()
        cy.get(this.selectorsList().comboboxButton).eq(1).click()
        cy.get('.oxd-select-dropdown').contains('Single').click()
    }
}

export default MyInfoPage