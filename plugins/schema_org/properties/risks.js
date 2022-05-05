const { context } = require('../base')

module.exports = function (API) {
  class Risks extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Risks] })
}