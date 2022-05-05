const { context } = require('../base')

module.exports = function (API) {
  class Email extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Email] })
}