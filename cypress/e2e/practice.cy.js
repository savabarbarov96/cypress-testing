/// <reference types="Cypress" />

import chai from 'chai';



beforeEach(() => {
    cy.visit("https://420hhc.com")
})


// describe("Pratice" , () => {
// it('Practice TC01', () => {

// cy.get('#emav_confirm_age').click()
// cy.wait(1000)
// cy.get('.post-7645 > .woocommerce-image__wrapper > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').scrollIntoView().trigger('mouseenter')
// cy.get('.post-7645 > .woocommerce-card__header > .button').click()
// cy.get('.checkout').click()
// cy.url().should("contain", "checkout")
// cy.log("Hey hey")
// })

// })


describe("API Testing", () => {
    it("POST Request", () => {
      cy.request({
        method: "POST",
        url: "https://jsonplaceholder.typicode.com/posts",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": "0",
        },
        body: {
          userId: 1,
        },
      }).then((res) => {
        cy.log(JSON.stringify(res))
        expect(res.body).to.have.property("id")
      })
    })
  })
  
  describe("TEST REAL", () => {
    it("GET Request", () => {
      cy.request({
        method: "GET",
        url: "http://savadoom.pythonanywhere.com/wk2315.2",
      }).then((res) => {
        expect(res.body).to.contain("April")
      })
    })
  })