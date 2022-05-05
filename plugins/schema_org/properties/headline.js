const { context } = require('../base')

module.exports = function (API) {
  class Headline extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Headline] })
}