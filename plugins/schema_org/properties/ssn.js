const { context } = require('../base')

module.exports = function (API) {
  class Ssn extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Ssn] })
}