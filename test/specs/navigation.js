const assert = require("assert");

describe("Homepage", () => {
  it("should load properly", async () => {
    await browser.url("./");

    // Checking
    const title = await browser.getTitle();
    await assert.strictEqual(title, "Conduit");

    await $("=Sign in").click();
    await expect(browser).toHaveUrl("https://demo.learnwebdriverio.com/login");

    // Challange from capture 2.1.10
    await $("=conduit").click();
    const homepage = await browser.getUrl();
    await assert.strictEqual(homepage, "https://demo.learnwebdriverio.com/");
  });
});
