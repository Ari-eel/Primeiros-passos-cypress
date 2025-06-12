import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashBoardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myinfoPage.js'

const loginPage = new LoginPage ()
const dashboardPage = new DashBoardPage ()
const menuPage = new MenuPage ()
const myInfoPage = new MyInfoPage ()
 
describe ('Orange HRM Tests', () => { 

  it.only ('User Info Update - sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboardPage()
    

    menuPage.checkMyPerfombutton()
    menuPage.checkMyInfoButton()
    
    myInfoPage.fillPersonalDetails('Ariel', 'Silva')
    myInfoPage.fillEmployeeDetails('EmploId', 'OtherIdTest', '2030-05-28', '1234', '4321')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
    
  })

  it ('Loggin - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })  

})