const { context } = require('../base')

module.exports = function (API) {
  class SdLicense extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SdLicense] })
}