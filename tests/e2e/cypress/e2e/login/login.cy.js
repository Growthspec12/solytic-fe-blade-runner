import { login, notValidCred, validCred } from "../../helpers/login.js";

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should have error at email field and disabled \"Sign In\" button", () => {
    // check email
    cy.get(".label__input:first").type(notValidCred.email).should("have.value", notValidCred.email);
    cy.get(".label:first").should("have.class", "form__input-error");
    cy.get("button").should("be.disabled", true);

    // check password
    cy.get(".label__input:last").type(validCred.password).should("have.value", validCred.password);
    cy.get(".label:last").should("not.have.class", "form__input-error");
    cy.get("button").should("be.disabled", true);
  });
  it("should have error at password field and disabled \"Sign In\" button", () => {
    // check password
    cy.get(".label__input:last").type(notValidCred.password).should("have.value", notValidCred.password);
    cy.get(".label:last").should("have.class", "form__input-error");
    cy.get("button").should("be.disabled", true);

    // check email
    cy.get(".label__input:first").type(validCred.email).should("have.value", validCred.email);
    cy.get(".label:first").should("not.have.class", "form__input-error");
    cy.get("button").should("be.disabled", true);
  });
  it("should have error at email and password field and disabled \"Sign In\" button", () => {
    // check email
    cy.get(".label__input:first").type(notValidCred.email).should("have.value", notValidCred.email);
    cy.get(".label:first").should("have.class", "form__input-error");
    cy.get("button").should("be.disabled", true);

    // check password
    cy.get(".label__input:last").type(notValidCred.password).should("have.value", notValidCred.password);
    cy.get(".label:last").should("have.class", "form__input-error");
    cy.get("button").should("be.disabled", true);
  });
  it("should have error at email and password field after click \"Sign In\" button", () => {
    cy.get(".label:first").should("not.have.class", "form__input-error");
    cy.get(".label:last").should("not.have.class", "form__input-error");

    cy.get("button").click();

    cy.get(".label:first").should("have.class", "form__input-error");
    cy.get(".label:last").should("not.have.class", "form__input-error");
    cy.get("button").should("be.disabled", true);
  });
  it("should successfully login", () => {
    login();
  });
});
