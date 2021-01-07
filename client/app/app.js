import angular from 'angular';
import uiRouter from 'angular-ui-router';
import modal from "angular-ui-bootstrap/src/modal";
import tooltip from "angular-ui-bootstrap/src/tooltip";
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import Services from "./services/services";

import 'normalize.css';

angular.module('app', [
    uiRouter,
    modal,
    tooltip,
    Common,
    Components,
    Services
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent)
// initiatePouch();
