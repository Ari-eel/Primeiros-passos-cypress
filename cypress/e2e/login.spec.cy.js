import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashBoardPage from '../pages/dashboardPage.js'


const loginPage = new LoginPage ()
const dashboardPage = new DashBoardPage ()
describe ('Login Orange HRM Tests', () => { 

  it ('Loggin - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAcessInvalid()
    
  })  
  it ('Loggin - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
  })

})