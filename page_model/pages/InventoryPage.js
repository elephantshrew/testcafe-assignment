import {Selector} from 'testcafe';

class InventoryPage{
    constructor(){
        this.pageTitle = Selector('.product_label');
        this.burgerMenu = Selector('#react-burger-menu-btn');
        this.logoutLink = Selector('#logout_sidebar_link');
        this.shoppingCart = Selector('svg[data-icon="shopping-cart"] > path');
        this.addToCartButton = Selector('.btn_primary');
        this.shoppingCartBadge = Selector('span.fa-layers-counter.shopping_cart_badge');
    }
}

export default new InventoryPage();