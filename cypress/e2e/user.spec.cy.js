import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashBoardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myinfoPage.js'

const Chance = require('chance');

const chance = new Chance()
const loginPage = new LoginPage ()
const dashboardPage = new DashBoardPage ()
const menuPage = new MenuPage ()
const myInfoPage = new MyInfoPage ()
 
describe ('Orange HRM Tests', () => { 

  it('User Info Update - sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboardPage()
    

    menuPage.checkMyPerfombutton()
    menuPage.checkMyInfoButton()
    
    myInfoPage.fillPersonalDetails(chance.first(), chance.last())
    myInfoPage.fillEmployeeDetails('EmploId', 'OtherIdTest', 'DV5245-2', '2030-05-28', '1994-05-17')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
    
  })

})