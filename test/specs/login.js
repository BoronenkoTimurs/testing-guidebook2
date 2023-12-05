// import { browser, $ } from "@wdio/globals";

const Auth = require("../pageObjects/Auth.page");
const { user1 } = require("../utilities/users");

const auth = new Auth();

describe("Login Page", () => {
  beforeEach(async () => {
    await browser.url("./login");
    await auth.load();
  });
  it("should let you log in", async () => {
    await auth.login(user1);
  });
  it("should error with a missing username", async () => {
    await auth.login({
      email: "",
      password: user1.password,
    });

    await expect(auth.$errorMessages).toHaveText(`email can't be blank`);
  });

  it("should error with a missing password", async () => {
    await auth.login({
      email: user1.email,
      password: "",
    });

    await expect(auth.$errorMessages).toHaveText(`password can't be blank`);
  });
});
