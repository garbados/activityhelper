const { context } = require('../base')

module.exports = function (API) {
  class RequiredMinAge extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RequiredMinAge] })
}