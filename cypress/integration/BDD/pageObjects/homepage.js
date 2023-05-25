class HomePage {
    visitToCheckout() {
        cy.visit(Cypress.env('baseUrl') + "checkout/delivery/116f991c-d074-4d0e-aad0-5680426ec322");
        cy.fixture("LoginForHirestreetuk.json").then((user) => {
            cy.get('#userSigninLogin').focus().type(user.email);
            cy.get('#userSigninPassword').focus().type(user.password);
            cy.contains('Sign In').click()
        })
    }
}

const homepage = new HomePage();

export default homepage;