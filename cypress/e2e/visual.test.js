/// <reference types="Cypress" />

describe("Visual Testing", () => {
  describe("No significant deviation from UI", () => {
    // it("main page", () => {
    //   cy.visit("/").get("section.hero").toMatchImageSnapshot({
    //     threshold: 0.001,
    //   })
    // })
    it("about page", () => {
      cy.visit("/about").get(".main").toMatchImageSnapshot({
        threshold: 0.001,
      })
    })
    it("contact page", () => {
      cy.visit("/contact").get(".main").toMatchImageSnapshot({
        threshold: 0.001,
      })
    })
  })
})
