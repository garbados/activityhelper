const { context } = require('../base')

module.exports = function (API) {
  class RequiredMaxAge extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RequiredMaxAge] })
}