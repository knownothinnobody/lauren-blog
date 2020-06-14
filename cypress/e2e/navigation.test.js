/// <reference types="Cypress" />
beforeEach(() => {
  cy.visit("/")
})
describe("Navigation Testing", () => {
  it("main page", () => {
    cy.get("section.hero")
  })
  it("about page", () => {
    cy.get("a.about-link").click({ force: true })
    cy.get("h1.about-title")
  })
  it("contact page", () => {
    cy.get("a.contact-link").click({ force: true })
    cy.get("h1.contact-title")
  })
})
