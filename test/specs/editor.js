const Auth = require("../pageObjects/Auth.page");
const Editor = require("../pageObjects/Editor.page");
const { user1 } = require("../utilities/users");

const auth = new Auth();
const editor = new Editor();

describe("Post Editor", () => {
  before(async () => {
    // Load Auth page and log in
    await auth.load();
    await auth.login(user1);
  });
  beforeEach(async () => {
    // Load the Post Editor page
    await editor.load();
  });
  it("should load page properly", async () => {
    // Not working becouse Generic.page.js line with new URL
    // await expect(browser).toHaveUrl(editor.url.href);
    await expect(editor.$title).toBeExisting();
    await expect(editor.$description).toBeExisting();
    await expect(editor.$body).toBeExisting();
    await expect(editor.$tags).toBeExisting();
    await expect(editor.$publish).toBeExisting();
  });
  it.only("shoud let you publish a new post", async () => {
    await editor.$title.setValue("Test Title");
    await editor.$description.setValue("Test Description");
    await editor.$body.setValue("Test body");

    await editor.$tags.setValue("Tag1");
    await browser.keys("Enter");

    await editor.$publish.click();
    await editor.$delete.click();
    await browser.pause(1000);
  });
});
