const { context } = require('../base')

module.exports = function (API) {
  class AdditionalType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AdditionalType] })
}