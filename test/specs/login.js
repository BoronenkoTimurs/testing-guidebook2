const Auth = require("../pageObjects/Auth.page");

const auth = new Auth();
const email = "demo@learnwebdriverio.com";
const password = "wdiodemo";

describe("Login Page", () => {
  beforeEach(async () => {
    await browser.url("./login");
  });
  it("should let you log in", async () => {
    await auth.login(email, password);

    // await expect(auth.$errorMessages).toBeExisting();
  });
  it("should error with a missing username", async () => {
    await auth.login("", password);

    // TODO: why not working with await
    await expect(auth.$errorMessages).toHaveText(`email can't be blank`);
  });

  it("should error with a missing password", async () => {
    await auth.login(email, "");

    // TODO: why not working with await
    await expect(auth.$errorMessages).toHaveText(`password can't be blank`);
  });
});
