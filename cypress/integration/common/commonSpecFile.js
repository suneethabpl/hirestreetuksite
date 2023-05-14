///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import homepage from '../BDD/pageObjects/homepage'

Given("a User is checking out", () => {
    homepage.visitToCheckout();
})

Given("the User has items in their cart", () =>{
    cy.contains('2 Items').should('be.visible');
})