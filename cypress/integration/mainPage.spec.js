  /// <reference types="@applitools/eyes-cypress" />

describe("AppliFashion Main Page", () => {
  beforeEach(() => {
    cy.visit('http://demo.applitools.com/tlcHackathonMasterV1.html');
  });
  afterEach(() => {
    cy.eyesClose();
  });
  it("Test 1", () => {
    cy.eyesOpen({
      appName: "AppliFashion",
      testName: "Test 1",
      stepName: "main page",
    });
    cy.eyesCheckWindow("Main Page");
  });
  it("Test 2", () => {
    cy.get("#LABEL__containerc__104").click();
    cy.get("#filterBtn").click();
    cy.eyesOpen({
      appName: "AppliFashion",
      testName: "Test 2",
      stepName: "filter by color",
    });
    cy.eyesCheckWindow({
        target: 'region',
        selector: '#product_grid'
    })
  });
  it("Test 3", () => {
    cy.get("#IMG__imgfluid__215").click();
    cy.eyesOpen({
      appName: "AppliFashion",
      testName: "Test 3",
      stepName: "product details",
    });
    cy.eyesCheckWindow()
  });
});
