import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashBoardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage ()
const dashboardPage = new DashBoardPage ()
const menuPage = new MenuPage ()

describe ('Orange HRM Tests', () => { 

  const selectorsList ={

    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: ".oxd-date-input",
    submitButton: ".orangehrm-left-space[type='submit']",
    comboboxButton: ".oxd-select-text--active",
  }

  it.only ('User Info Update - sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboardPage()
    
    menuPage.checkMyInfoButton()

    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('EmpIdTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseTest')
    cy.get(selectorsList.dateField).eq(0).clear().click().type('2030-12-02')
    cy.get(selectorsList.dateField).eq(1).clear().click().type('1999-05-12')
    cy.get(selectorsList.comboboxButton).eq(0).click()
    cy.get('.oxd-select-dropdown').contains('Brazilian').click()
    cy.get(selectorsList.comboboxButton).eq(1).click()
    cy.get('.oxd-select-dropdown').contains('Single').click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get(selectorsList.submitButton).eq(1).click()
    cy.get('body').should('contain','Successfully Updated')
  })

  it ('Loggin - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })  

})