const { context } = require('../base')

module.exports = function (API) {
  class Competitor extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Competitor] })
}