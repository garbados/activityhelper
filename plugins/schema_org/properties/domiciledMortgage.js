const { context } = require('../base')

module.exports = function (API) {
  class DomiciledMortgage extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DomiciledMortgage] })
}