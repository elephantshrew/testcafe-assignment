import {Selector} from 'testcafe';

class CartPage{
    constructor(){
        this.quantity = Selector('.cart_quantity_label');
        this.checkoutButton = Selector('a.btn_action.checkout_button');
    }
}

export default new CartPage();