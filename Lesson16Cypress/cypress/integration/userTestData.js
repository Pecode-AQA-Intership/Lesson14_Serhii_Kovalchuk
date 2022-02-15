const faker = require("faker");
export const TEST_FIRST_NAME = faker.name.firstName();
export const TEST_LAST_NAME = faker.name.lastName();
export const TEST_EMAIL = faker.internet.email();
export const TEST_PHONE_NUMBER = Math.floor(Math.random() * 1e10);
export const TEST_ADDRESS = faker.address.streetAddress();
export const TEST_MONTH = faker.random.number(10);
export const TEST_YEAR = faker.random.number(65);
export const TEST_DAY = faker.random.number({min: 1, max: 28});
export const TEST_SUBJECT = "Commerce";

