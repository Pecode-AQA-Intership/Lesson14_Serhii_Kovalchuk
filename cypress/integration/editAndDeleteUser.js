import * as userTestData from "./userTestData.js";
import * as selectors from "./selectors.js";

describe("Check if user data is editable", () => {
  before(() => {
    cy.visit(URL);
  });

  it("Check if user can get to data edit menu by clicking on edit pictogram", () => {
    cy.get(selectors.EDIT_BUTTON).click().get(selectors.MODAL_CONTENT).should("be.visible");
  });

  it("Check if all fields is editable", () => {
    cy.get(selectors.FIRST_NAME)
      .type("{selectall}{backspace}")
      .type(userTestData.FAKE_FIRST_NAME)
      .should("have.value", userTestData.FAKE_FIRST_NAME)

      .get(selectors.LAST_NAME)
      .type("{selectall}{backspace}")
      .type(userTestData.FAKE_LAST_NAME)
      .should("have.value", userTestData.FAKE_LAST_NAME)

      .get(selectors.EMAIL)
      .type("{selectall}{backspace}")
      .type(userTestData.FAKE_LAST_NAME)
      .should("have.value", userTestData.FAKE_LAST_NAME)

      .get(selectors.AGE)
      .type("{selectall}{backspace}")
      .type(userTestData.FAKE_AGE)
      .should("have.value", userTestData.FAKE_AGE)

      .get(selectors.SALARY)
      .type("{selectall}{backspace}")
      .type(userTestData.FAKE_SALARY)
      .should("have.value", userTestData.FAKE_SALARY)

      .get(selectors.DEPARTMENT)
      .type("{selectall}{backspace}")
      .type(userTestData.FAKE_DEPARTMENT)
      .should("have.value", userTestData.FAKE_DEPARTMENT);
  });

  it("Check if submit button save edited data", () => {
    cy.get(selectors.SUBMIT_BUTTON)
      .click()
      .get(".rt-tr-group")
      .should(
        "include.text",
        userTestData.FAKE_FIRST_NAME,
        userTestData.FAKE_LAST_NAME,
        userTestData.FAKE_EMAIL,
        userTestData.FAKE_AGE,
        userTestData.FAKE_SALARY,
        userTestData.FAKE_DEPARTMENT
      );
  });

  it("Delete user data and verify", () => {
    cy.get(selectors.DELETE_BUTTON)
      .click()
      .get(selectors.SEARCH_OUTPUT)
      .contains(
        userTestData.FAKE_FIRST_NAME,
        userTestData.FAKE_LAST_NAME,
        userTestData.FAKE_EMAIL,
        userTestData.FAKE_AGE,
        userTestData.FAKE_SALARY,
        userTestData.FAKE_DEPARTMENT
      )
      .should("not.exist");
  });
});
