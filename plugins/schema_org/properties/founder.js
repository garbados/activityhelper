const { context } = require('../base')

module.exports = function (API) {
  class Founder extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Founder] })
}