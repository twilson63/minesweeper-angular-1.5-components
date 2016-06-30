// main app mainifest
//
// this sets up angular and declares all components and services and filters

var angular = require('angular')

angular.module('app', [])
  .factory('msSvc', require('./services/ms-svc'))
  .filter('cellstate', require('./filters').cellstate)
  .component('app', require('./components/app'))
  .component('nav', require('./components/nav'))
  .component('board', require('./components/board'))
  .component('row', require('./components/row'))
  .component('cell', require('./components/cell'))
