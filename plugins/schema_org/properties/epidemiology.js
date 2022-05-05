const { context } = require('../base')

module.exports = function (API) {
  class Epidemiology extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Epidemiology] })
}