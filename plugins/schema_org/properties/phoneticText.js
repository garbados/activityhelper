const { context } = require('../base')

module.exports = function (API) {
  class PhoneticText extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PhoneticText] })
}