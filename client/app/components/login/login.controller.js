class LoginController {
  constructor(pouchService) {
    this.pouchService = pouchService;
    this.username = "newuser";
    this.password = "123123";
  }

  submitForm() {
    this.pouchService.login(this.username, this.password);
  }
}

export default LoginController;
