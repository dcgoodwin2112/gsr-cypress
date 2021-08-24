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

  beforeEach(() => {
    cy.get("[data-cy=win]").invoke("text").then(parseInt).as("win")
    cy.get("[data-cy=lose]").invoke("text").then(parseInt).as("lose")
    cy.get("[data-cy=draw]").invoke("text").then(parseInt).as("draw")
  })

  const initialState = () => {
    cy.get("@win").should("eq", 0)
    cy.get("@lose").should("eq", 0)
    cy.get("@draw").should("eq", 0)
    cy.get("[data-cy=action-result]").contains(/ready/i)
    cy.get("[data-cy=game-status]").contains(/click a cat button/i)
    cy.get("[data-cy=p1-placeholder]")
    cy.get("[data-cy=cpu-placeholder]")
    cy.get("[data-cy=active-label]").should("not.exist")
  }

  it("Test initial game state", () => {
    initialState()
  })

  it("Test Good cat action button", () => {
    cy.get("[data-cy=good]").click()
    cy.get("[data-cy=action-result]").should("not.contain", /ready/i)
    cy.get("[data-cy=p1-good-img]")
    cy.get("[data-cy=game-status]").contains(/kitty 1 is feeling nice today/i)
    cy.get("[data-cy=active-label]")
    // Test top turn status bar
    /* eslint-disable jest/valid-expect-in-promise */
    cy.get("[data-cy=action-result]")
      .invoke("text")
      .then((action) => {
        switch (action) {
          case "Winner!":
            cy.get("[data-cy=win]")
              .invoke("text")
              .then(parseInt)
              .should("be.gt", 0)
            break
          case "Loser!":
            cy.get("[data-cy=lose]")
              .invoke("text")
              .then(parseInt)
              .should("be.gt", 0)
            break
          case "Draw!":
            cy.get("[data-cy=draw]")
              .invoke("text")
              .then(parseInt)
              .should("be.gt", 0)
            break
          default:
            assert(false, "Turn result was not valid")
        }
      })
  })

  it("Test Sad cat action button", () => {
    cy.get("[data-cy=sad]").click()
    cy.get("[data-cy=action-result]").should("not.contain", /ready/i)
    cy.get("[data-cy=p1-sad-img]")
    cy.get("[data-cy=game-status]").contains(
      /Kitty 1 is a bit under the weather/i
    )
    cy.get("[data-cy=active-label]")
  })

  it("Test Rad cat action button", () => {
    cy.get("[data-cy=rad]").click()
    cy.get("[data-cy=action-result]").should("not.contain", /ready/i)
    cy.get("[data-cy=p1-rad-img]")
    cy.get("[data-cy=game-status]").contains(
      /Kitty 1 is too cool for kitten school/i
    )
    cy.get("[data-cy=active-label]")
  })

  it("Test reset button", () => {
    cy.get("[data-cy=reset]").click()
  })

  it("Test initial after reset", () => {
    initialState()
  })
})
