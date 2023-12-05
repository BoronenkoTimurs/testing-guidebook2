const got = require("got");
class Api {
  constructor(prefixUrl) {
    this.client = got.extend({
      prefixUrl,
      responseTyps: "json",
    });
  }

  async getAuthToken({ email, password }) {
    return await this.client
      .post("/users/login", {
        json: { user: { email, password } },
      })
      .then((response) => response.body.user.token);
  }
}

module.exports = Api;
