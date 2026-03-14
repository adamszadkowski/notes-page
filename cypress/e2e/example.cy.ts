describe("Notes Page", () => {
  it("loads the app and shows the song selector", () => {
    cy.visit("/");
    cy.get("h1").should("exist");
  });

  it("opens the song dropdown on click", () => {
    cy.visit("/");
    cy.get("h1 button").click();
    cy.get("ul li").should("have.length.greaterThan", 0);
  });
});
