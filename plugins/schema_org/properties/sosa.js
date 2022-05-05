const { context } = require('../base')

module.exports = function (API) {
  class Sosa extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Sosa] })
}