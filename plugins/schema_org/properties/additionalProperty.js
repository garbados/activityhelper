const { context } = require('../base')

module.exports = function (API) {
  class AdditionalProperty extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AdditionalProperty] })
}