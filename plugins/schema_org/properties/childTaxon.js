const { context } = require('../base')

module.exports = function (API) {
  class ChildTaxon extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ChildTaxon] })
}