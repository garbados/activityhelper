const { context } = require('../base')

module.exports = function (API) {
  class AudienceType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AudienceType] })
}