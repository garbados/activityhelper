const { context } = require('../base')

module.exports = function (API) {
  class ComprisedOf extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ComprisedOf] })
}