const { context } = require('../base')

module.exports = function (API) {
  class Odrl extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Odrl] })
}