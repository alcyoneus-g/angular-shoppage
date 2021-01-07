import template from './login.html';
import LoginController from './login.controller';
import './login.scss';

let loginComponent = {
  bindings: {},
  template,
  controller: ['pouchService', LoginController]
};

export default loginComponent;
