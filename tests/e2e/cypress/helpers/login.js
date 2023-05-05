export const notValidCred = {
  email: "fakeEmail.com",
  password: "12345"
};
export const validCred = {
  id: 123,
  email: "test@test.com",
  password: "12345678"
};

export const login = () => {
  // check email
  cy.get(".label__input:first").type(validCred.email).should("have.value", validCred.email);
  cy.get(".label:first").should("not.have.class", "form__input-error");
  cy.get("button").should("not.be.disabled", true);

  // check password
  cy.get(".label__input:last").type(validCred.password).should("have.value", validCred.password);
  cy.get(".label:last").should("not.have.class", "form__input-error");
  cy.get("button").should("not.be.disabled", true)
    .click();
  cy.get(".popup__inner > h2").should("have.text", ` User ID: ${validCred.id}`);
  cy.get(".popup__inner > button").click()
    .should(
      () => {
        expect(localStorage.getItem("token")).to.exist;
      });
  cy.location("pathname").should("include", "user");
};
