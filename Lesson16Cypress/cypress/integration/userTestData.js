const faker = require("faker");

export const TEST_FIRST_NAME = faker.name.firstName();
export const TEST_LAST_NAME = faker.name.lastName();
export const TEST_EMAIL = faker.internet.email();
export const TEST_PHONE_NUMBER = faker.phone.phoneNumber("##########");
export const TEST_ADDRESS = faker.address.secondaryAddress();
export const FILE_PATH = 'jeembo.jpg';
export const TEST_SUBJECT = "Commerce{enter}";
export const TEST_MONTH = "May";
export const TEST_YEAR = "1997";
