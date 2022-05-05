const { context } = require('../base')

module.exports = function (API) {
  class PredecessorOf extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PredecessorOf] })
}