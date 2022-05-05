const { context } = require('../base')

module.exports = function (API) {
  class HasMap extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HasMap] })
}