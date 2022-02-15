import * as testData from "./userTestData.js";
import RegistrationPage from "../pageObjects/registrationPage.js";

describe("Student Registration form test", () => {
  const registrationPage = new RegistrationPage();
  before(() => {
    cy.visit("/automation-practice-form");
  });

  it("Check that the student can register", () => {
    registrationPage.firstNameField().type(testData.TEST_FIRST_NAME);
    registrationPage.lastNameField().type(testData.TEST_LAST_NAME);
    registrationPage.emailField().type(testData.TEST_EMAIL);
    registrationPage.genderCheckbox().click();
    registrationPage.phoneNumberField().type(testData.TEST_PHONE_NUMBER);
    registrationPage.dateOfBirthField().click();
    registrationPage.monthInput().select(testData.TEST_MONTH);
    registrationPage.yearInput().select(testData.TEST_YEAR);
    registrationPage.dayInput().contains(testData.TEST_DAY).click();
    registrationPage.subjectsInput().type(testData.TEST_SUBJECT);
    registrationPage.hobbiesCheckbox().click({force: true});
    registrationPage.addressField().type(testData.TEST_ADDRESS);
  });
});
