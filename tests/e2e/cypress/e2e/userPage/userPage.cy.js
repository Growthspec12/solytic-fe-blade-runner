import { login, validCred } from "../../helpers/login.js";

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should successfully login", () => {
    login();
    cy.get(" nav > ul > li:nth-child(1)").should("have.text", validCred.id);
    cy.get(" nav > ul > li:nth-child(2)").should("have.text", validCred.email);
  });
});
