const Generic = require("./Generic.page");

class Home extends Generic {
  constructor() {
    super("./");
  }
  get $$feedTabs() {
    return $$('[data-qa-id="feed-tabs"] [data-qa-type="feed-tab"]');
  }
  async checkFeedText() {
    const feedTabsText = ["Your Feed", "Global Feed"];
    for (let i = 0; i < feedTabsText.length; i++) {
      const feedTabText = await this.$$feedTabs[i].getText();
      await expect(feedTabText).toEqual(feedTabsText[i]);
    }
  }
  async checkFeedIncorrectText() {
    const incorrectText = ["Incorrect1", "Incorrect2"];
    for (let i = 0; i < incorrectText.length; i++) {
      const feedTabText = await this.$$feedTabs[i].getText();
      await expect(feedTabText).not.toEqual(incorrectText[i]);
    }
  }
}

module.exports = Home;
