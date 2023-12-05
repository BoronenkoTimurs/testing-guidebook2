const Auth = require("../pageObjects/Auth.page");
const Home = require("../pageObjects/Home.page");
const { user1 } = require("../utilities/users");

const home = new Home();
const auth = new Auth();

describe("Homepage", () => {
  before(async () => {
    await home.load();
  });
  it("should load properly", async () => {
    await expect(home.$siteHeader).toBeExisting();
    await expect(home.$siteFooter).toBeExisting();
    await expect(home.$siteNav).toBeExisting();
  });
  it("should only show the global feed", async () => {
    await expect(home.$$feedTabs).toHaveText("Global Feed");
  });
  describe("Loggin in", () => {
    before(async () => {
      await auth.load();
      await auth.login(user1);
      await home.load();
    });
    it("should show both feedtabs text", async () => {
      const feedTabsText = ["Your Feed", "Global Feed"];

      for (let i = 0; i < feedTabsText.length; i++) {
        const feedTabText = await home.$$feedTabs[i].getText();
        await expect(feedTabText).toEqual(feedTabsText[i]);
      }
    });
  });
});
