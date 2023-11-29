const Generic = require("./Generic.page");

class Editor extends Generic {
  constructor() {
    super("./editor");
  }
  get $title() {
    return $('[data-qa-id="editor-title"]');
  }
  get $description() {
    return $('[data-qa-id="editor-description"]');
  }
  get $body() {
    return $('[data-qa-id="editor-body"] textarea');
  }
  get $tags() {
    return $('[data-qa-id="editor-tags"]');
  }
  get $publish() {
    return $('[data-qa-id="editor-publish"]');
  }
  get $delete() {
    return $('[data-qa-id="article-delete"]');
  }
  get $home() {
    return $("=Home");
  }
  async submitArticle({ title, description, body, tags }) {
    await this.$title.setValue(title);
    await this.$description.setValue(description);
    await this.$body.setValue(body);
    await tags.forEach((tag) => {
      this.$tags.setValue(tag);
      browser.keys("Enter");
    });
    await this.$publish.click();
  }
}

module.exports = Editor;
