describe("playground", () => {
  it("JSON Wire Protocol", async () => {
    console.log(await browser.status());
    await browser.pause(2000);
  });
  it.only("Execute func testing", async () => {
    await browser.url("./");
    console.log("outside the browser");
    await browser.execute(async () => {
      console.log("inside the browser");
      window.alert("This call come from insde the browser!");
    });
    await browser.pause(30000);
  });
});
