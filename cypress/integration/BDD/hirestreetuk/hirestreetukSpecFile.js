///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import hirestreet from "../pageObjects/hirestreetukOnPage"

When("the customer applies a valid discount code {string}", (validcode) => {
    hirestreet.validDiscountCode(validcode);
})

Then("the order total should be updated with the discounted price {string}", (discountedtotal) => {
    hirestreet.updatedTotalWithDiscount(discountedtotal);
})

Then("the discount amount should be displayed {string}", (dicountprice) => {
    hirestreet.discountPrice(dicountprice);
})


When("the User applies an invalid discount code {string}", (invalidcode) => {
    hirestreet.inValidDiscountCode(invalidcode);
})

Then("the User should see an error message indicating that {string}", (errormsg) => {
    cy.contains('* Oops. Invalid discount code "2FOR37"').should('be.visible');
})