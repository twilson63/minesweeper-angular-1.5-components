// currently not implemented
const h = require('hyperscript')
const { div, p } = require('hyperscript-helpers')(h)
// app component
module.exports = {
  bindings: {
    create: '&'
  },
  template: template().outerHTML ,
  controller: controller
}

function template () {
  return div('.row', [
    p(['status bar'])
  ])
}

function controller() {
  // do nothing
  
}
