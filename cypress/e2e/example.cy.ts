describe("Notes Page", () => {
  it("loads the app and shows the song list in sidebar", () => {
    cy.visit("/");
    cy.get("aside[aria-label='Menu piosenek']").should("exist");
    cy.get("aside[aria-label='Menu piosenek'] button").should(
      "have.length.greaterThan",
      0
    );
  });

  it("selects a song by clicking it in the sidebar", () => {
    cy.visit("/");
    cy.get("aside[aria-label='Menu piosenek'] button").first().click();
    cy.get("h1").should("exist");
  });
});
