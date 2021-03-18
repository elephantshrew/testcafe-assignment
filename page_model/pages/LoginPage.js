import {Selector} from 'testcafe';

class LoginPage{
    constructor(){
        this.usernameField = Selector('input#user-name');
        this.passwordField = Selector('input#password');
        this.loginButton = Selector('input#login-button');
        this.errorMessage = Selector('h3[data-test=\'error\']');
    }


}

export default new LoginPage();