const { context } = require('../base')

module.exports = function (API) {
  class MarginOfError extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MarginOfError] })
}