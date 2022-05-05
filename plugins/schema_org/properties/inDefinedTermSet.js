const { context } = require('../base')

module.exports = function (API) {
  class InDefinedTermSet extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [InDefinedTermSet] })
}