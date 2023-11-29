const Generic = require("./Generic.page");

class Article extends Generic {
  get $container() {
    return $('[data-qa-id="article-page"]');
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
  get $$tags() {
    return $$('[data-qa-id="article-tags"] [data-qa-type="article-tag"]');
  }

  get $edit() {
    return $('[data-qa-id="article-edit"]');
  }
  get $delete() {
    return $('[data-qa-id="article-delete"]');
  }
  get tags() {
    return this.$$tags.map(($tag) => {
      $tag.getText();
    });
  }
}

module.exports = Article;
