const { context } = require('../base')

module.exports = function (API) {
  class Slogan extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Slogan] })
}