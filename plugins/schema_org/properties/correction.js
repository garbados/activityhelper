const { context } = require('../base')

module.exports = function (API) {
  class Correction extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Correction] })
}