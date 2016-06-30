// app component
const h = require('hyperscript')
// app component
// https://docs.angularjs.org/guide/component
module.exports = {
  bindings: {
    title: '@'
  },
  template: template().outerHTML,
  controller: ['msSvc', controller]
}

function controller(msSvc) {
  // do nothing
  var $ctrl = this
  $ctrl.grid = msSvc.createBoard(10,10,15)
  // $ctrl.create = function (row, cols, mines) {
  //   $ctrl.grid = msSvc.createBoard(10,10,15)
  // }

  msSvc.update(function (board) {
    // $scope.$apply(function() {
    //
    // })
    $ctrl.grid = board
  })
}

// pure template functions
function template () {
  return h('div', [
    Nav(),
    Board()
  ])
}

function Nav () {
  return h('nav', { 'data-title': '$ctrl.title' })
}

function Board () {
  return h('board', { 'data-grid': '$ctrl.grid'})
}
