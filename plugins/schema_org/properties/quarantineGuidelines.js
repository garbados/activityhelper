const { context } = require('../base')

module.exports = function (API) {
  class QuarantineGuidelines extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [QuarantineGuidelines] })
}