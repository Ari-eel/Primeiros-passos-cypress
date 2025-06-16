import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashBoardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myinfoPage.js'

const Chance = require('chance');
const chance = new Chance()

const randomDate = chance.date();
const formattedDate = `${randomDate.getFullYear()}-${(randomDate.getMonth() + 1).toString().padStart(2, '0')}-${randomDate.getDate().toString().padStart(2, '0')}`;
console.log(formattedDate);


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
    myInfoPage.fillEmployeeDetails(chance.android_id().substring(0, 10), chance.android_id().substring(0, 10), 'DV5245-2', formattedDate, formattedDate)
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
    
  })

})