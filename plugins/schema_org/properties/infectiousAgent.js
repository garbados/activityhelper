const { context } = require('../base')

module.exports = function (API) {
  class InfectiousAgent extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [InfectiousAgent] })
}