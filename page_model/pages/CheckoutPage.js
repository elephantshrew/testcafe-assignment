import {Selector} from 'testcafe';

class CheckoutPage{
    constructor(){
        this.continueButton = Selector('input.btn_primary.cart_button');
        this.errorMessage = Selector('h3[data-test="error"]');
        this.firstNameField = Selector('input#first-name');
        this.lastNameField = Selector('input#last-name');
        this.postalCodeField = Selector('input#postal-code');
        this.subheader = Selector('.subheader');
    }

}

export default new CheckoutPage();