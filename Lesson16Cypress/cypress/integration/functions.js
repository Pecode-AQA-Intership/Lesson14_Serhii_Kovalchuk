import * as testData from "./userTestData.js";
import RegistrationPage from "../pageObjects/registrationPage.js";
const registrationPage = new RegistrationPage();
export function inputStudentData() {
  registrationPage.firstNameField()
    .type(testData.TEST_FIRST_NAME)
    .should("have.value", testData.TEST_FIRST_NAME);
  registrationPage.lastNameField()
    .type(testData.TEST_LAST_NAME)
    .should("have.value", testData.TEST_LAST_NAME);
  registrationPage.emailField()
    .type(testData.TEST_EMAIL)
    .should("have.value", testData.TEST_EMAIL);
  registrationPage.genderCheckbox()
    .click()
    .should("have.text", "Female");
  registrationPage.phoneNumberField()
    .type(testData.TEST_PHONE_NUMBER)
    .should("have.value", testData.TEST_PHONE_NUMBER);
  registrationPage.pictureUpload().click()
    .selectFile("jeembo.jpg");
  registrationPage.dateOfBirthField().click();
  registrationPage.monthInput()
    .select(testData.TEST_MONTH)
    .should("include.text", testData.TEST_MONTH);
  registrationPage.yearInput()
    .select(testData.TEST_YEAR)
    .should("have.value", testData.TEST_YEAR);
  registrationPage.dayInput().click();
  registrationPage.dateOfBirthField()
    .should("have.value", "26 May 1997");
  registrationPage.subjectsInput()
    .type(testData.TEST_SUBJECT);
  registrationPage.hobbiesCheckbox()
    .click({ force: true });
  registrationPage.addressField()
    .type(testData.TEST_ADDRESS);
  registrationPage.stateSelect().click()
    .type("Raj{enter}")
    .should("contain", "Rajasthan");
  registrationPage.citySelect().click()
    .type("Jais{enter}")
    .should("contain", "Jaiselmer");
  registrationPage.submitButton().click();
}
export function submitResponseVerify() {
  registrationPage.submitResponse()
    .should("contain", testData.TEST_FIRST_NAME);
  registrationPage.submitResponse()
    .should("contain", testData.TEST_LAST_NAME);
  registrationPage.submitResponse()
    .should("contain", testData.TEST_EMAIL);
  registrationPage.submitResponse()
    .should("contain", "Female");
  registrationPage.submitResponse()
    .should("contain", testData.TEST_PHONE_NUMBER);
  registrationPage.submitResponse() 
    .should("contain", "26 May,1997");
  registrationPage.submitResponse()
    .should("contain", "Commerce");
  registrationPage.submitResponse()
    .should("contain", "Music");
  registrationPage.submitResponse()
    .should("contain", testData.TEST_ADDRESS);
  registrationPage.submitResponse()
    .should("contain", "Rajasthan Jaiselmer");
  registrationPage.submitResponse()
    .should("contain", "jeembo.jpg")
}
