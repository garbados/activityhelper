const { context } = require('../base')

module.exports = function (API) {
  class ServiceSmsNumber extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ServiceSmsNumber] })
}