// board component
const h = require('hyperscript')
const { div } = require('hyperscript-helpers')(h)
// app component
module.exports = {
  bindings: {
    grid: '<'
  },
  template: template().outerHTML
}

/*
<div class="container">
  <row ng-repeat="row in $ctrl.grid" row="row"></row>
</div>
*/

function template () {
  return div('.container', [ Row() ])
}

function Row () {
  return h('row', {
    'data-ng-repeat': 'row in $ctrl.grid',
    'data-row': 'row'
  })
}
