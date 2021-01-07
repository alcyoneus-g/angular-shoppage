import template from './header.html';
import HeaderController from './header.controller';
import './header.scss';

let headerComponent = {
  bindings: {},
  template,
  controller: ["$location", "$uibModal", "userService", HeaderController]
};

export default headerComponent;
