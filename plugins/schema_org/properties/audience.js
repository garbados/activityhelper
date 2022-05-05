const { context } = require('../base')

module.exports = function (API) {
  class Audience extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Audience] })
}