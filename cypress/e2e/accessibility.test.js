/// <reference types="Cypress" />

describe("Accessibility tests", () => {
  describe("Has no detectable accessibility violations on load", () => {
    it("main page", () => {
      cy.visit("/").get("main").injectAxe()
      cy.checkA11y()
    })
    it("about page", () => {
      cy.visit("/about").get("main").injectAxe()
      cy.checkA11y()
    })
    it("contact page", () => {
      cy.visit("/contact").get("main").injectAxe()
      cy.checkA11y()
    })
  })
})
