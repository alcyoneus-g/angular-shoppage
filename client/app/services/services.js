import angular from 'angular';
import pouchService from "./pouch/pouchService";
import userService from "./user/userService";

let factoryModule = angular.module('app.services', [])
.factory('userService', userService)
.factory('pouchService', ['$rootScope', '$location', 'userService', pouchService])

.name;

export default factoryModule;