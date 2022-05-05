const { context } = require('../base')

module.exports = function (API) {
  class Jurisdiction extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Jurisdiction] })
}