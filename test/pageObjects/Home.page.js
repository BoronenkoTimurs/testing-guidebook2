const Generic = require("./Generic.page");
const { feedTabsText, incorrectTabsText } = require("../../utils/feedTabs");
class Home extends Generic {
  constructor() {
    super("./");
  }
  get $$feedTabs() {
    return $$('[data-qa-id="feed-tabs"] [data-qa-type="feed-tab"]');
  }
  async checkFeedText() {
    for (let i = 0; i < feedTabsText.length; i++) {
      const feedTabText = await this.$$feedTabs[i].getText();
      await expect(feedTabText).toEqual(feedTabsText[i]);
    }
  }
  async checkFeedIncorrectText() {
    for (let i = 0; i < incorrectTabsText.length; i++) {
      const feedTabText = await this.$$feedTabs[i].getText();
      await expect(feedTabText).not.toEqual(incorrectTabsText[i]);
    }
  }
}

module.exports = Home;
