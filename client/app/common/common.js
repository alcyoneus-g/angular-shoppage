import angular from 'angular';
import Header from "./header/header";
import ProductController from './product/product.controller';
import ConfirmationController from './confirmation/confirmation.controller';

let commonModule = angular.module('app.common', [
  Header
])
.controller("productController", ["$uibModalInstance", "pouchService", "info", ProductController])
.controller("confirmationController", ["$uibModalInstance", "pouchService", "product", ConfirmationController])
  
.name;

export default commonModule;
