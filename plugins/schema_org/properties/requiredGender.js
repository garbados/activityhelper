const { context } = require('../base')

module.exports = function (API) {
  class RequiredGender extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RequiredGender] })
}