const { context } = require('../base')

module.exports = function (API) {
  class DietFeatures extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DietFeatures] })
}