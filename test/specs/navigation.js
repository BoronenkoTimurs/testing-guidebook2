const assert = require("assert");

describe("Homepage", () => {
  it("should load properly", async () => {
    console.log("OPA!");
    await browser.url("./");

    // const title = await browser.getTitle();
    // await assert.strictEqual(title, "Conduit");
    await expect(browser).toHaveTitle("Conduit");

    await $("=Sign in").click();

    // const URL = await browser.getUrl();
    // await assert.strictEqual(URL, "http://localhost:8080/login");
    // await expect(browser).toHaveUrl("http://localhost:d080/login");
    expect(browser).toHaveUrl("/lodin", { containing: true });
  });
});
