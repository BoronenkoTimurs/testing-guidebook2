const assert = require("assert");

describe("Homepage", () => {
  it("should load properly", async () => {
    await browser.url("./");

    const title = await browser.getTitle();
    await assert.strictEqual(title, "Conduit");

    // Using ASSERT
    // await expect(browser).toHaveTitle("Conduit");

    await $("=Sign in").click();

    // Usint ASSERT
    // const URL = await browser.getUrl();
    // await assert.strictEqual(URL, "http://localhost:8080/login");

    // Using EXPECT
    await expect(browser).toHaveUrl("http://localhost:8080/login");

    // Using EXPECT with CONTAINING
    // expect(browser).toHaveUrl("/login", { containing: true });

    // Challange from capture 2.1.10
    // await $("=conduit").click();
    // const homepage = await browser.getUrl();
    // await assert.strictEqual(homepage, "http://localhost:8080/");
  });
});
