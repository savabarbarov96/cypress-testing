
/// <reference types="cypress" />

// This script has testing library Cypress Plugin pre installed

const textSample = Cypress.env("username")
describe("Test suite", () => {
  beforeEach(() => {
    // This is a very useful way to have the data ready for usage for each test. NOTE THAT WE HAVE TO USE 
    // function keyword and not the arrow function in this case.

    cy.fixture("example").then(function(data){
      this.data = data
      console.log(this.data)
      cy.log(this.data)
      cy.log(this.data.name)
      cy.log(this.data.email)
      cy.log(this.data.body)

    })
    cy.visit('/commands/actions')
  })

  // it("Page should have h1 element and a title", () => {
    
  //   cy.get("h1").contains("Actions")
  // })

  // it("Enter email", () => {
  //   cy.get('.action-email').type("Hello there!")
  //   cy.get('.action-email').should('have.value', 'Hellothere!')

  // })

  // it("Work with disabled fields", () => {

  //   cy.get('.action-disabled').type(textSample, {force:true})
  //   cy.get('.action-disabled').should('have.attr', 'disabled')

  // })
  // it("Have Title", () => {

  //   cy.title().should("contain", "Cypress.io")

  // })
  // it("Password field", () => {

  //   cy.get('#password1').focus().should('have.class', 'focus')
  // })

  // it("Working with a form", () => {

  //   cy.get('.action-form').find('[type="text"]').type("Holla holla get dolla")
  //   cy.get('.action-form').submit().next().should('contain', 'submitted!')
  // })

  // // Get the 3rd container using the "eq". Basically what it does it says which element from a list we should have selected.
  // it("Renders paragraphs", () => {
  //   cy.get('.container').eq(2).find('p').should('exist')
  // })
  // // Really useful! 
  // it("Renders paragraphs", () => {
  //   cy.get('.container').eq(2).within(() => {
  //     cy.get('h4').eq(2).should('have.id', 'blur')
  //   })

    
  // })
  // it("Async", () => {
  //   cy.findAllByPlaceholderText("Email").type(textSample, {delay:300}, {setTimeout:100000})
  //   cy.wait(1000)
  //   cy.log("This will be logged once the previous commands are executed")

  //   console.log("This will run regardless of the previous commands, since is not a cy. command")
  // })

  // it(".then() example", () => {
  //   cy.findAllByLabelText('Password').type("eyey")
  //   cy.wait(1000).then(() => {
  //     // Example of Fetch to be executed asynchronously. For this example it will fetch the data and convert the response to json and then we get the json data
  //     fetch("https://api.spacexdata.com/v3/capsules")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data[1].status);
  //         cy.wrap(data)
  //           .its('1.status')
  //           .should('equal', 'retired');
  //       });
  //   });
  // });
//   it('Shows an active property for the current page', () => {
//     cy.get('.action-select').find('option').eq(2).should('have.a.value', 'fr-oranges')
//     cy.get('.action-select').find('option').last().should('have.a.value', 'fr-bananas')
//   })
//  // 
//   it("Checking some boxes!", () => {
//     cy.get('.action-check [type="checkbox"]').check().should('be.checked')
//     cy.get('.action-check [type="checkbox"]').last().uncheck().should('not.be.checked')
//   })
//   // Fixture is a way to get stubbed data (data that is hardcoded) Example below:
//   it("Pulls data from a Fixture", () => {
//     cy.fixture('example').then((data => {
//       cy.log('data:', data )
//     cy.fixture('example').then((data) => {
//       console.log(data.name) // log the data
//     })
//     }))
//   })
//   it("Update data in a fixture", () => {
//     cy.fixture('example').then((data) => {
//       data.email = "Updated Email bla bla"
//       cy.log("Updated", data.email)
//     })
//   })
  // Use fixtures for API requests
  it("Uses fixture data in a network request", () => {
    cy.visit("/commands/network-requests")
    cy.request('https://jsonplaceholder.cypress.io/comments').should((response) => {
    expect(response.status).to.eq(200)
    expect(response.body).to.have.length(500)
    expect(response).to.have.property('headers')
  })
  })


  it("Fixture and intercept", function() {
    cy.visit("/commands/network-requests")
    cy.intercept('GET', '**/comments/*', this.data).as('getComments')
    cy.get('.network-btn').click()
    cy.wait('@getComments').then((res) => {
      cy.log(res.body)
    })
  })

  })

