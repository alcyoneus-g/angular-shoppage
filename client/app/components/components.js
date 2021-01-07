import angular from 'angular';
import Home from './home/home';
import Login from "./login/login";

let componentModule = angular.module('app.components', [
  "ui.bootstrap.modal",
  "ui.bootstrap.tooltip",
  Home,
  Login,
])

.name;

export default componentModule;
