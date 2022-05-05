const { context } = require('../base')

module.exports = function (API) {
  class SecurityScreening extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SecurityScreening] })
}