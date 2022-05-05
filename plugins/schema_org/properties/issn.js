const { context } = require('../base')

module.exports = function (API) {
  class Issn extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Issn] })
}