import * as userTestData from "./userTestData.js";
import * as selectors from "./selectors.js"
import * as functions from "./functions.js"
describe("Creating and verifying a new user", () => {
  before(() => {
    cy.visit("/webtables");
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
      .get(selectors.TABLE)
      .should("include.text", userTestData.FAKE_FIRST_NAME)

      .get(selectors.SEARCH_BOX)
      .type("{selectall}{backspace}")
      .type(userTestData.FAKE_LAST_NAME)
      .should("have.value", userTestData.FAKE_LAST_NAME)
      .get(selectors.TABLE)
      .should("include.text", userTestData.FAKE_LAST_NAME)

      .get(selectors.SEARCH_BOX)
      .type("{selectall}{backspace}")
      .type(userTestData.FAKE_AGE)
      .should("have.value", userTestData.FAKE_AGE)
      .get(selectors.TABLE)
      .should("include.text", userTestData.FAKE_AGE)

      .get(selectors.SEARCH_BOX)
      .type("{selectall}{backspace}")
      .type(userTestData.FAKE_EMAIL)
      .should("have.value", userTestData.FAKE_EMAIL)
      .get(selectors.TABLE)
      .should("include.text", userTestData.FAKE_EMAIL)

      .get(selectors.SEARCH_BOX)
      .type("{selectall}{backspace}")
      .type(userTestData.FAKE_SALARY)
      .should("have.value", userTestData.FAKE_SALARY)
      .get(selectors.TABLE)
      .should("include.text", userTestData.FAKE_SALARY)

      .get(selectors.SEARCH_BOX)
      .type("{selectall}{backspace}")
      .type(userTestData.FAKE_DEPARTMENT)
      .should("have.value", userTestData.FAKE_DEPARTMENT)
      .get(selectors.TABLE)
      .should("include.text", userTestData.FAKE_DEPARTMENT);
  });
  it("Check if user can sort by First Name", () => {

    cy.get(selectors.SORT_FIRST_NAME).click()
        .should("have.class", selectors.SORT_ASC)
        .then(functions.getInnerText)
        .then((firstNames) => {
            let sortFirstNames = functions.stringSort(firstNames);
            expect(firstNames).to.deep.equal(sortFirstNames);
        })

    cy.get(selectors.SORT_FIRST_NAME).click()
        .should("have.class", selectors.SORT_DESC)
        .then(functions.getInnerText)
        .then((firstNames) => {
            let sortFirstNames = functions.stringSort(firstNames);
            expect(firstNames).to.deep.equal(sortFirstNames);
        })
})

it("Check if user can sort by Last Name", () => {

    cy.get(selectors.SORT_LAST_NAME).click()
        .should("have.class", selectors.SORT_ASC)
        .then(functions.getInnerText)
        .then((lastNames) => {
            let sortLastNames = functions.stringSort(lastNames);
            expect(lastNames).to.deep.equal(sortLastNames);
        })

    cy.get(selectors.SORT_LAST_NAME).click()
        .should("have.class", selectors.SORT_DESC)
        .then(functions.getInnerText)
        .then((lastNames) => {
            let sortLastNames = functions.stringSort(lastNames);
            expect(lastNames).to.deep.equal(sortLastNames);
        })
})

it("Check if user can sort by Age", () => {

    cy.get(selectors.SORT_AGE).click()
        .should("have.class", selectors.SORT_ASC)
        .then(functions.getNumbers)
        .then((ages) => {
            let sortAges = functions.stringSort(ages);
            expect(ages).to.deep.equal(sortAges);
        })

    cy.get(selectors.SORT_AGE).click()
        .should("have.class", selectors.SORT_DESC)
        .then(functions.getNumbers)
        .then((ages) => {
            let sortAges = functions.stringSort(ages);
            expect(ages).to.deep.equal(sortAges);
        })
})

it("Check if user can sort by Email", () => {

    cy.get(selectors.SORT_EMAIL).click()
        .should("have.class", selectors.SORT_ASC)
        .then(functions.getInnerText)
        .then(functions.getNumbers)
        .then((emails) => {
            let sortEmails = functions.stringSort(emails);
            expect(emails).to.deep.equal(sortEmails);
        })

    cy.get(selectors.SORT_EMAIL).click()
        .should("have.class", selectors.SORT_DESC)
        .then(functions.getInnerText)
        .then(functions.getNumbers)
        .then((emails) => {
            let sortEmails = functions.stringSort(emails);
            expect(emails).to.deep.equal(sortEmails);
        })
})

it("Check if user can sort by Salary", () => {

    cy.get(selectors.SORT_SALARY).click()
        .should("have.class", selectors.SORT_ASC)
        .then(functions.getNumbers)
        .then((salary) => {
            let sortSalary = functions.stringSort(salary);
            expect(salary).to.deep.equal(sortSalary);
        })

    cy.get(selectors.SORT_SALARY).click()
        .should("have.class", selectors.SORT_DESC)
        .then(functions.getNumbers)
        .then((salary) => {
            let sortSalary = functions.stringSort(salary);
            expect(salary).to.deep.equal(sortSalary);
        })
})

it("Check if user can sort by Department", () => {

    cy.get(selectors.SORT_DEPARTMENT).click()
        .should("have.class", selectors.SORT_ASC)
        .then(functions.getInnerText)
        .then((departments) => {
            let sortDepartments = functions.stringSort(departments);
            expect(departments).to.deep.equal(sortDepartments);
        })

    cy.get(selectors.SORT_DEPARTMENT).click()
        .should("have.class", selectors.SORT_DESC)
        .then(functions.getInnerText)
        .then((departments) => {
            let sortDepartments = functions.stringSort(departments);
            expect(departments).to.deep.equal(sortDepartments);
        })
})

});
