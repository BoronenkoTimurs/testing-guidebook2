const Auth = require("../pageObjects/Auth.page");
const Editor = require("../pageObjects/Editor.page");

const auth = new Auth();
const editor = new Editor();

const email = "demo@learnwebdriverio.com";
const password = "wdiodemo";

describe("Post Editor", () => {
  before(async () => {
    // Load the login page
    await browser.url("./login");
    // Login with a valid user
    await auth.login(email, password);
  });
  beforeEach(async () => {
    // Load the Post Editor page
    await browser.url("./editor");
  });
  it("should load page properly", async () => {
    // Assert the URL is correct
    expect(browser).toHaveUrl("editor", { containing: true });
    // Assert the page fields are correct
    expect(editor.$title).toBeExisting();
    expect(editor.$description).toBeExisting();
    expect(editor.$body).toBeExisting();
    expect(editor.$tags).toBeExisting();
    expect(editor.$publish).toBeExisting();
  });
});
