import { inputStudentData, submitResponseVerify } from "./functions.js"
describe("Student Registration form test", () => {
  before(() => {
    cy.visit("/automation-practice-form");
  });

  it("Check if the user can input his data ", () => {
    inputStudentData()
  })
  it("Verify submitted data", () => {
    submitResponseVerify()
  })
});
