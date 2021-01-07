import template from './home.html';
import HomeController from './home.controller';
import './home.scss';

let homeComponent = {
  bindings: {},
  template,
  controller: ["$location", "$uibModal", "userService", "pouchService", HomeController]
};

export default homeComponent;
