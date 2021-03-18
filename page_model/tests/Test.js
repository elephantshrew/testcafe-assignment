import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import CheckoutOverviewPage from '../pages/CheckoutOverviewPage';
import FinishPage from '../pages/FinishPage';

fixture('login testing')
    .page('https://www.saucedemo.com/');

    test('Question 1: Login with valid credentials', async t => {
        await t
            .typeText(LoginPage.usernameField, 'standard_user')
            .typeText(LoginPage.passwordField, 'secret_sauce')
            .click(LoginPage.loginButton);
        
        await t.expect(InventoryPage.pageTitle.exists).ok();
    });



    test('Question 2: Login with invalid credentials', async t => {
        await t
            .typeText(LoginPage.usernameField,'invaliduser@example.com')
            .typeText(LoginPage.passwordField, 'testasdf')
            .click(LoginPage.loginButton);
    
        await t.expect(LoginPage.errorMessage.exists).ok();   
    });
    
    test('Question 3: Logout from product page', async t=> {
        await t
        .typeText(LoginPage.usernameField, 'standard_user')
        .typeText(LoginPage.passwordField, 'secret_sauce')
        .click(LoginPage.loginButton)
        .click(InventoryPage.burgerMenu)
        .click(InventoryPage.logoutLink);

        await t.expect(LoginPage.usernameField.exists).ok();
    });

    test('Question 4: Navigate to shopping cart', async t=> {
        await t
        .typeText(LoginPage.usernameField, 'standard_user')
        .typeText(LoginPage.passwordField, 'secret_sauce')
        .click(LoginPage.loginButton)
        .click(InventoryPage.shoppingCart);

        await t.expect(CartPage.quantity.exists).ok();
    });

    test('Question 5: Add a single item to shopping cart', async t=> {
        await t
        .typeText(LoginPage.usernameField, 'standard_user')
        .typeText(LoginPage.passwordField, 'secret_sauce')
        .click(LoginPage.loginButton)
        .click(InventoryPage.addToCartButton);

        await t.expect(InventoryPage.shoppingCartBadge.withText('1').exists).ok();
    });

    test('Question 6: Add multiple items to shopping cart', async t=> {
        await t
        .typeText(LoginPage.usernameField, 'standard_user')
        .typeText(LoginPage.passwordField, 'secret_sauce')
        .click(LoginPage.loginButton)
        .click(InventoryPage.addToCartButton.nth(0))
        .click(InventoryPage.addToCartButton.nth(1))
        .click(InventoryPage.addToCartButton.nth(2));

        await t.expect(InventoryPage.shoppingCartBadge.withText('3').exists).ok();
    });

    test('Question 7: Continue with missing info', async t=> {
        await t
        .typeText(LoginPage.usernameField, 'standard_user')
        .typeText(LoginPage.passwordField, 'secret_sauce')
        .click(LoginPage.loginButton)
        .click(InventoryPage.addToCartButton.nth(0))
        .click(InventoryPage.shoppingCart)
        .click(CartPage.checkoutButton)
        .click(CheckoutPage.continueButton);

        await t.expect(CheckoutPage.errorMessage.exists).ok();
    });

    test('Question 8: Fill all user data', async t=> {
        await t
        .typeText(LoginPage.usernameField, 'standard_user')
        .typeText(LoginPage.passwordField, 'secret_sauce')
        .click(LoginPage.loginButton)
        .click(InventoryPage.addToCartButton.nth(0))
        .click(InventoryPage.shoppingCart)
        .click(CartPage.checkoutButton)
        .typeText(CheckoutPage.firstNameField, 'Ada')
        .typeText(CheckoutPage.lastNameField, 'Lovelace')
        .typeText(CheckoutPage.postalCodeField, '1234')
        .click(CheckoutPage.continueButton);

        await t.expect(CheckoutPage.subheader.withText('Checkout: Overview').exists).ok();
    });

    test('Question 9: Final order items match', async t=> {
        await t
        .typeText(LoginPage.usernameField, 'standard_user')
        .typeText(LoginPage.passwordField, 'secret_sauce')
        .click(LoginPage.loginButton)
        .click(InventoryPage.addToCartButton.nth(0))
        .click(InventoryPage.addToCartButton.nth(0))
        .click(InventoryPage.addToCartButton.nth(0))
        .click(InventoryPage.shoppingCart)
        .click(CartPage.checkoutButton)
        .typeText(CheckoutPage.firstNameField, 'Ada')
        .typeText(CheckoutPage.lastNameField, 'Lovelace')
        .typeText(CheckoutPage.postalCodeField, '1234')
        .click(CheckoutPage.continueButton);

        
        await t.expect(CheckoutOverviewPage.inventoryItemName.nth(0).withText('Sauce Labs Backpack').exists).ok();
        await t.expect(CheckoutOverviewPage.inventoryItemName.nth(1).withText('Sauce Labs Bike Light').exists).ok();
        await t.expect(CheckoutOverviewPage.inventoryItemName.nth(2).withText('Sauce Labs Bolt T-Shirt').exists).ok();      
    });

    test('Question 10: Purchase complete', async t=> {
        await t
        .typeText(LoginPage.usernameField, 'standard_user')
        .typeText(LoginPage.passwordField, 'secret_sauce')
        .click(LoginPage.loginButton)
        .click(InventoryPage.addToCartButton.nth(0))
        .click(InventoryPage.addToCartButton.nth(0))
        .click(InventoryPage.addToCartButton.nth(0))
        .click(InventoryPage.shoppingCart)
        .click(CartPage.checkoutButton)
        .typeText(CheckoutPage.firstNameField, 'Ada')
        .typeText(CheckoutPage.lastNameField, 'Lovelace')
        .typeText(CheckoutPage.postalCodeField, '1234')
        .click(CheckoutPage.continueButton)
        .click(CheckoutOverviewPage.finishButton);

        await t.expect(FinishPage.subHeader.withText('Finish').exists).ok();        
    });