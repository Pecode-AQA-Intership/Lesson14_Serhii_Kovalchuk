import * as userTestData from "./userTestData.js";
import * as selectors from "./selectors.js"

describe("Creating and verifying a new user", () => {
  before(() => {
    cy.visit(URL);
  });

  it("Click Add", () => {
    cy.get(selectors.ADD_NEW_RECORD_BUTTON).click();
    cy.get(selectors.MODAL_CONTENT).should("be.visible");
  });
  it("Enter User Data", () => {
    cy.get(selectors.FIRST_NAME)
      .type(userTestData.FAKE_FIRST_NAME)
      .should("have.value", userTestData.FAKE_FIRST_NAME)

      .get(selectors.LAST_NAME)
      .type(userTestData.FAKE_LAST_NAME)
      .should("have.value", userTestData.FAKE_LAST_NAME)

      .get(selectors.EMAIL)
      .type(userTestData.FAKE_EMAIL)
      .should("have.value", userTestData.FAKE_EMAIL)

      .get(selectors.AGE)
      .type(userTestData.FAKE_AGE)
      .should("have.value", userTestData.FAKE_AGE)

      .get(selectors.SALARY)
      .type(userTestData.FAKE_SALARY)
      .should("have.value", userTestData.FAKE_SALARY)

      .get(selectors.DEPARTMENT)
      .type(userTestData.FAKE_DEPARTMENT)
      .should("have.value", userTestData.FAKE_DEPARTMENT)

      .get(selectors.SUBMIT_BUTTON)
      .click();
  });
  it("Check if the user has been add", () => {
    cy.get(".rt-tr-group")
      .should("include.text", 
        userTestData.FAKE_FIRST_NAME,
        userTestData.FAKE_LAST_NAME,
        userTestData.FAKE_EMAIL,
        userTestData.FAKE_AGE,
        userTestData.FAKE_SALARY,
        userTestData.FAKE_DEPARTMENT);
  });

  it("Check the searching feature", () => {
    cy.get(selectors.SEARCH_BOX)
      .type(userTestData.FAKE_FIRST_NAME)
      .should("have.value", userTestData.FAKE_FIRST_NAME)
      .get(selectors.SEARCH_OUTPUT)
      .should("include.text", userTestData.FAKE_FIRST_NAME)

      .get(selectors.SEARCH_BOX)
      .type("{selectall}{backspace}")
      .type(userTestData.fakeLastName)
      .should("have.value", userTestData.fakeLastName)
      .get(selectors.SEARCH_OUTPUT)
      .should("include.text", userTestData.fakeLastName)

      .get(selectors.SEARCH_BOX)
      .type("{selectall}{backspace}")
      .type(userTestData.fakeAge)
      .should("have.value", userTestData.fakeAge)
      .get(selectors.SEARCH_OUTPUT)
      .should("include.text", userTestData.fakeAge)

      .get(selectors.SEARCH_BOX)
      .type("{selectall}{backspace}")
      .type(userTestData.fakeEmail)
      .should("have.value", userTestData.fakeEmail)
      .get(selectors.SEARCH_OUTPUT)
      .should("include.text", userTestData.fakeEmail)

      .get(selectors.SEARCH_BOX)
      .type("{selectall}{backspace}")
      .type(userTestData.fakeSalary)
      .should("have.value", userTestData.fakeSalary)
      .get(selectors.SEARCH_OUTPUT)
      .should("include.text", userTestData.fakeSalary)

      .get(selectors.SEARCH_BOX)
      .type("{selectall}{backspace}")
      .type(userTestData.fakeDepartment)
      .should("have.value", userTestData.fakeDepartment)
      .get(selectors.SEARCH_OUTPUT)
      .should("include.text", userTestData.fakeDepartment);
  });
});
