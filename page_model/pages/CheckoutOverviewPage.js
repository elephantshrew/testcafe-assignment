import {Selector} from 'testcafe';

class CheckoutOverviewPage{
    constructor(){
        this.continueButton = Selector('input.btn_primary.cart_button');
        this.errorMessage = Selector('h3[data-test="error"]');
        this.inventoryItemName = Selector('.inventory_item_name');
        this.finishButton = Selector('a.btn_action');
    }

}

export default new CheckoutOverviewPage();