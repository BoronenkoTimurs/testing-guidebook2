const { URL } = require("url");

class Generic {
  constructor(path) {
    this.path = path;
    // URL not working "Unable to load spec files quite likely because they rely on `browser` object that is not fully initialised."
    // this.url = new URL(path, browser.config.baseUrl);
  }
  get $siteHeader() {
    return $('[data-qa-id="site-header"]');
  }
  get $siteFooter() {
    return $('[data-qa-id="site-footer"]');
  }
  get $siteNav() {
    return $('[data-qa-id="site-nav"]');
  }
  async load() {
    await browser.url(this.path);
  }
}
module.exports = Generic;
