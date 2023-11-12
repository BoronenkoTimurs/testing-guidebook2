describe("Login Page", () => {
  it("should let you log in", async () => {
    // go to the login page
    browser.url("./login");
    // enter a valid username in the "email" input
    await $('input[type="email"]').setValue("demo@learnwebdriverio.com");
    // enter a valid password in the "password" input
    // await $('input[type="password"]').setValue("wdiodemo");
    // click the 'Sign In' button
    await $(".btn").click();
    // 1 sec pause
    await browser.pause(1000);
    // assert that we're logged in
    await expect($(".error-messages li")).not.toBeExisting();
  });
  // should error with a missing username
  // should error with a missing password
});
