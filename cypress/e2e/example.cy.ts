describe("Notes Page", () => {
  it("loads the app and shows the song selector", () => {
    cy.visit("/");
    cy.get("button").contains(/Wybierz piosenkę/i).should("exist");
  });

  it("opens the song dropdown on click", () => {
    cy.visit("/");
    cy.get("button").contains(/Wybierz piosenkę/i).click();
    cy.get("[role=menu] [role=menuitem]").should("have.length.greaterThan", 0);
  });
});
