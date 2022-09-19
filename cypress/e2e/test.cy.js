/// <reference types="cypress"/>

it("Assertions Demo", () => {
  cy.visit("https://example.cypress.io"); // open the url
  cy.get(
    ":nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)"
  ).click();
  cy.get("#query-btn")
    .should("contain", "Button")
    .and("have.class", "query-btn")
    .and("be.visible");

  cy.get("#query-btn").invoke("attr", "data-test-id"); // invoke command can be used to show a modal or play an animation
  // usage of the invoke command 
//   cy.get('div.container')
//   .should('be.hidden') // element is hidden
//   .invoke('show') // call jquery method 'show' on the '.container'
//   .should('be.visible') // element is visible now
//   .find('input') // drill down into a child "input" element
//   .type('Cypress is great') // and type text
  // explicit assertions
  let name = "cypress";
  expect(name).to.equal("cypress");
  expect(true).to.be.true;

  // Assert
  assert.equal(4,4,'NOT EQUAL')


});
