const { context } = require('../base')

module.exports = function (API) {
  class Dcat extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Dcat] })
}