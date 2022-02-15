export default class RegistrationPage {
  firstNameField = () => cy.get("#firstName");
  lastNameField = () => cy.get("#lastName");
  emailField = () => cy.get("#userEmail");
  genderCheckbox = () => cy.get("#gender-radio-2").siblings();
  phoneNumberField = () => cy.get("#userNumber");
  dateOfBirthField = () => cy.get("#dateOfBirthInput");
  dayInput = () => cy.get(".react-datepicker__day");
  monthInput = () => cy.get(".react-datepicker__month-select");
  yearInput = () => cy.get(".react-datepicker__year-select");
  subjectsInput = () => cy.get("#subjectsContainer");
  hobbiesCheckbox = () => cy.get("#hobbies-checkbox-3");
  addressField = () => cy.get("#currentAddress");
  //pictureUpload = () => cy.get("#uploadPicture");
  //stateSelect = () => cy.get("#state");
  //citySelect = () => cy.get("#city");
  submitButton = () => cy.get("#submit");
}
