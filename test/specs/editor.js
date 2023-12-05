// import { browser, $ } from "@wdio/globals";

const Auth = require("../pageObjects/Auth.page");
const Editor = require("../pageObjects/Editor.page");
const Chance = require("chance");
const Article = require("../pageObjects/Article.page");
const { user1 } = require("../utilities/users");

const auth = new Auth();
const editor = new Editor();
const chance = new Chance();
const article = new Article();

describe("Post Editor", () => {
  before(async () => {
    await auth.load();
    await auth.login(user1);
  });
  beforeEach(async () => {
    await editor.load();
  });
  it("should load editor page properly", async () => {
    // TODO: Not working becouse Generic.page.js line with new URL
    // await expect(browser).toHaveUrl(editor.url.href);
    await expect(editor.$title).toBeExisting();
    await expect(editor.$description).toBeExisting();
    await expect(editor.$body).toBeExisting();
    await expect(editor.$tags).toBeExisting();
    await expect(editor.$publish).toBeExisting();
  });
  it("shoud let you publish a new post", async () => {
    const articleDetails = {
      title: global.chance.sentence({ words: 3 }),
      description: global.chance.sentence({ words: 7 }),
      body: global.chance.sentence({ sentences: 4 }),
      tags: [global.chance.word(), global.chance.word()],
    };
    await editor.submitArticle(articleDetails);

    // TODO: Why expect doesn't work?
    // await expect(editor.$title).toHaveText(articleDetails.title);

    await article.$delete.click();
  });

  describe('"Unsaved Changes" alerts', () => {
    beforeEach(async () => {
      await editor.$title.setValue("Unsaved Changes");
    });
    it("should alert when using browser navigation", async () => {
      await browser.refresh();

      await expect(() => browser.acceptAlert()).not.toThrow();
    });
    it("should alert when clicking a link", async () => {
      await editor.$home.click();

      const alertText = await browser.getAlertText();
      await expect(alertText).toEqual(
        "Do you really want to leave? You have unsaved changes!"
      );
      await browser.acceptAlert();
    });
  });
});
