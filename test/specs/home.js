// const Api = require("../../utils/Api");
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

      // Error:  Unable to load spec files quite likely because they rely on `browser` object that is not fully initialised.
      // const api = new Api("https://demo.learnwebdriverio.com/");
      // const token = browser.call(async () => {
      //   return await api.getAuthToken(user1);
      // });
      // await home.load();
      // await browser.execute(async () => {
      //   window.localStorage.setItem("id_token", browserToken);
      // }, token);
      // await home.load();
    });
    after(async () => {
      // Is it realy clear the session?
      auth.clearSession;
    });
    it("should show both feed tabs text", async () => {
      await home.checkFeedText();
    });
    it("should show incorrect text for feed tabs", async () => {
      await home.checkFeedIncorrectText();
    });
  });
});
