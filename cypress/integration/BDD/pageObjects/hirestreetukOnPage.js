class Hirestreet {

    validDiscountCode(validcode) {
        cy.contains('Edit Bag').click();
        cy.contains('Add rental credit or discount code').click();
        cy.get('#DiscountCode').focus().type(validcode)
        cy.contains('Apply').click();
        cy.contains('Checkout').click();
    }

    updatedTotalWithDiscount(discountedtotal) {
        getCostByLabelText('Outfits:').should('be.visible');
        getCostByLabelText('2FOR35:').should('be.visible');
        getCostByLabelText('Accidental Damage Cover:').should('be.visible');
        getCostByLabelText('Delivery:').should('be.visible');
        getCostByLabelText('Total:').contains(discountedtotal).should('be.visible');
    }

    discountPrice(discountprice) {
        getCostByLabelText('2FOR35:').contains(discountprice).should('be.visible');
    }

    inValidDiscountCode(invalidcode) {
        cy.contains('Edit Bag').click();
        cy.contains('Add rental credit or discount code').click();
        cy.get('#DiscountCode').focus().type(invalidcode)
        cy.contains('Apply').click();
    }
}

function getCostByLabelText(labelText) {
    return cy.contains(labelText).parent().find('div')
}

const hirestreet = new Hirestreet();

export default hirestreet;