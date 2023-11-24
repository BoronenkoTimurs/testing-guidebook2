const Auth = require("../pageObjects/Auth.page");

const auth = new Auth();

describe("Login Page", () => {
  beforeEach(async () => {
    await browser.url("./login");
  });
  it("should let you log in", async () => {
    await auth.login("demo2@learnwebdriverio.com", "wdiodemo");

    // await auth.$signIn.waitForExist({ reverse: true });
    // await expect(auth.$errorMessages).toBeExisting();
    await browser.pause(1000);
  });
  it.skip("should error with a missing username", async () => {
    await auth.login("", "wdiodemo");

    // TODO: why not working with await
    expect(auth.$errorMessages).toHaveText(`email can't be blank`);
  });

  it.skip("should error with a missing password", async () => {
    await auth.login("demo@learnwebdriverio.com", "");

    // TODO: why not working with await
    expect(auth.$errorMessages).toHaveText(`password can't be blank`);
  });
});
