const { context } = require('../base')

module.exports = function (API) {
  class Duns extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Duns] })
}