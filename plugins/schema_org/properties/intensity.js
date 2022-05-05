const { context } = require('../base')

module.exports = function (API) {
  class Intensity extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Intensity] })
}