const { context } = require('../base')

module.exports = function (API) {
  class SameAs extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SameAs] })
}