export class LoginPage{



    // using locators

    username_textbox = "[name = 'username']"
    password_textbox = "[name = 'password']"
    login_button = ".oxd-button"
    user_logged_in = ".oxd-userdropdown-tab"

    enterUsername(username){
        cy.get(this.username_textbox).click().type(username)
    }

    enterPassword(password){
        cy.get(this.password_textbox).click().type(password)
    }

    clickLogin(){
        cy.get(this.login_button).click()
    }

    verifyLogin(){
        cy.get(this.user_logged_in).click()
    }
}