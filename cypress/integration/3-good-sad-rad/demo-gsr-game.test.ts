/**
 * NOTES:
 * Cypress is promise based. Don't assign cy functions to variables.
 *   let badVar = cy.get("Bad Kitty. Don't do this!")
 * Use chained commands instead.
 *   cy.get(".cat-button").contains(...)
 *
 * Many methods have default assertions. Not every test needs an additional assertion
 *   cy.get(".imaginary-button") === failed test if button does not exist
 *
 * Cypress handles retries and waiting for you. Defaults can be overridden
 *   cy.get(".cat-button", {timeout: 10000})
 *
 */

describe("Testing Good cat, Sad cat, Rad cat Game", () => {
  before(() => {
    cy.visit("/")
  })

  // TODO Test Application
})
