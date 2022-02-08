const faker = require("faker");
export const URL = "https://demoqa.com/webtables";
export const USER_DATA = {
  fakeFirstName: faker.name.firstName(),
  fakeLastName: faker.name.lastName(),
  fakeEmail: faker.internet.email(),
  fakeAge: "23",
  fakeSalary: faker.random.number(),
  fakeDepartment: faker.commerce.department(),
};
export const SELECTORS = {
  firstName: "#firstName",
  lastName: "#lastName",
  email: "#userEmail",
  age: "#age",
  salary: "#salary",
  department: "#department",
  submitButton: "#submit",
};
