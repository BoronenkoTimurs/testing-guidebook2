class Register {
  get $username() {
    return $('input[placeholder="Username"]');
  }
  get $email() {
    return $('input[placeholder="Email"]');
  }
  get $password() {
    return $('input[placeholder="Password"]');
  }
  get $register() {
    return $("button*=Sign up");
  }
  get $errorMsgs() {
    return $(".error-messages li");
  }

  async submit(username, email, password) {
    await this.$username.setValue(username);
    await this.$email.setValue(email);
    await this.$password.setValue(password);
    await this.$register.click();

    await browser.waitUntil(
      async () => {
        const buttonExisting = await this.$register.isExisting();
        const errorExisting = await this.$errorMsgs.isExisting();

        return !buttonExisting || errorExisting;
      },
      {
        timoutMsg:
          'The "Sign up" button is not gone and an error never appeared',
      }
    );
  }
}
module.exports = Register;
