const Register = require("../pageObjects/SignUp.page");

const register = new Register();
const username = "test123";
const email = "test123@gmail.com";
const password = "123456";

describe("Sign up page testing", () => {
  beforeEach(() => {
    browser.url("./register");
  });
  // Valid data for new acc
  it("should let you register", async () => {
    await register.submit(username, email, password);
    await browser.pause(1000);
  });
  // Username already taken
  // Emial not valid format
  // Email already taken
  // Takes to homepage after registration
});
