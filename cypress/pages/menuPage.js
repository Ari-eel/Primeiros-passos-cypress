class MenuPage {
    selectorsList() {
        const selectors = {
          myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
          myPerfomButton: "[href='/web/index.php/performance/viewPerformanceModule']",
          RecruitmentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
        } 

        return selectors

    }
    checkMyInfoButton() {
         cy.get(this.selectorsList().myInfoButton).click()
    }
    checkMyPerfombutton() {
         cy.get(this.selectorsList().myPerfomButton).click()
    }
    checkRecruitmentButton() {
         cy.get(this.selectorsList(),RecruitmentButton).click()
    }
}

export default MenuPage