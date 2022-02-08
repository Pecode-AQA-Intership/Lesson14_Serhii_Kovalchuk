import { URL, USER_DATA, SELECTORS } from "../fixtures/consts.js";

describe("Creating and verifying a new user", () => {
  before(() => {
    cy.visit(URL);
  });

  it("Click Add", () => {
    cy.get("#addNewRecordButton").click();
    cy.get(".modal-content").should("be.visible");
  });
  it("Enter User Data", () => {
    cy.get(SELECTORS.firstName)
      .type(USER_DATA.fakeFirstName)
      .should("have.value", USER_DATA.fakeFirstName)

      .get(SELECTORS.lastName)
      .type(USER_DATA.fakeLastName)
      .should("have.value", USER_DATA.fakeLastName)

      .get(SELECTORS.email)
      .type(USER_DATA.fakeEmail)
      .should("have.value", USER_DATA.fakeEmail)

      .get(SELECTORS.age)
      .type(USER_DATA.fakeAge)
      .should("have.value", USER_DATA.fakeAge)

      .get(SELECTORS.salary)
      .type(USER_DATA.fakeSalary)
      .should("have.value", USER_DATA.fakeSalary)

      .get(SELECTORS.department)
      .type(USER_DATA.fakeDepartment)
      .should("have.value", USER_DATA.fakeDepartment)

      .get(SELECTORS.submitButton)
      .click();
  });
  it("Check if the user has been add", () => {
    cy.get(".rt-tr-group")
      .should("include.text", USER_DATA.fakeFirstName)
      .should("include.text", USER_DATA.fakeLastName)
      .should("include.text", USER_DATA.fakeEmail)
      .should("include.text", USER_DATA.fakeAge)
      .should("include.text", USER_DATA.fakeSalary)
      .should("include.text", USER_DATA.fakeDepartment);
  });

  it("Check the searching feature", () => {
    cy.get("#searchBox")
      .type(USER_DATA.fakeFirstName)
      .should("have.value", USER_DATA.fakeFirstName)
      .get(".rt-tbody")
      .should("include.text", USER_DATA.fakeFirstName)

      .get("#searchBox")
      .type("{selectall}{backspace}")
      .type(USER_DATA.fakeLastName)
      .should("have.value", USER_DATA.fakeLastName)
      .get(".rt-tbody")
      .should("include.text", USER_DATA.fakeLastName)

      .get("#searchBox")
      .type("{selectall}{backspace}")
      .type(USER_DATA.fakeAge)
      .should("have.value", USER_DATA.fakeAge)
      .get(".rt-tbody")
      .should("include.text", USER_DATA.fakeAge)

      .get("#searchBox")
      .type("{selectall}{backspace}")
      .type(USER_DATA.fakeEmail)
      .should("have.value", USER_DATA.fakeEmail)
      .get(".rt-tbody")
      .should("include.text", USER_DATA.fakeEmail)

      .get("#searchBox")
      .type("{selectall}{backspace}")
      .type(USER_DATA.fakeSalary)
      .should("have.value", USER_DATA.fakeSalary)
      .get(".rt-tbody")
      .should("include.text", USER_DATA.fakeSalary)

      .get("#searchBox")
      .type("{selectall}{backspace}")
      .type(USER_DATA.fakeDepartment)
      .should("have.value", USER_DATA.fakeDepartment)
      .get(".rt-tbody")
      .should("include.text", USER_DATA.fakeDepartment);
  });
});
