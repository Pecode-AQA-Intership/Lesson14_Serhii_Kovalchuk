import { URL, USER_DATA, SELECTORS } from "../fixtures/consts.js";

describe("Check if user data is editable", () => {
  before(() => {
    cy.visit(URL);
  });

  it("Check if user can get to data edit menu by clicking on edit pictogram", () => {
    cy.get("#edit-record-3").click().get(".modal-content").should("be.visible");
  });

  it("Check if all fields is editable", () => {
    cy.get(SELECTORS.firstName)
      .type("{selectall}{backspace}")
      .type(USER_DATA.fakeFirstName)
      .should("have.value", USER_DATA.fakeFirstName)

      .get(SELECTORS.lastName)
      .type("{selectall}{backspace}")
      .type(USER_DATA.fakeLastName)
      .should("have.value", USER_DATA.fakeLastName)

      .get(SELECTORS.email)
      .type("{selectall}{backspace}")
      .type(USER_DATA.fakeEmail)
      .should("have.value", USER_DATA.fakeEmail)

      .get(SELECTORS.age)
      .type("{selectall}{backspace}")
      .type(USER_DATA.fakeAge)
      .should("have.value", USER_DATA.fakeAge)

      .get(SELECTORS.salary)
      .type("{selectall}{backspace}")
      .type(USER_DATA.fakeSalary)
      .should("have.value", USER_DATA.fakeSalary)

      .get(SELECTORS.department)
      .type("{selectall}{backspace}")
      .type(USER_DATA.fakeDepartment)
      .should("have.value", USER_DATA.fakeDepartment);
  });

  it("Check if submit button save edited data", () => {
    cy.get(SELECTORS.submitButton)
      .click()
      .get(".rt-tr-group")
      .should(
        "include.text",
        USER_DATA.fakeFirstName,
        USER_DATA.fakeLastName,
        USER_DATA.fakeEmail,
        USER_DATA.fakeAge,
        USER_DATA.fakeSalary,
        USER_DATA.fakeDepartment
      );
  });

  it("Delete user data and verify", () => {
    cy.get("#delete-record-3")
      .click()
      .get(".rt-tbody")
      .contains(
        USER_DATA.fakeFirstName,
        USER_DATA.fakeLastName,
        USER_DATA.fakeEmail,
        USER_DATA.fakeAge,
        USER_DATA.fakeSalary,
        USER_DATA.fakeDepartment
      )
      .should("not.exist");
  });
});
