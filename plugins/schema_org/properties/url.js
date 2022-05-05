const { context } = require('../base')

module.exports = function (API) {
  class Url extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Url] })
}