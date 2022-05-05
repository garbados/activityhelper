const { context } = require('../base')

module.exports = function (API) {
  class PropertyID extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PropertyID] })
}