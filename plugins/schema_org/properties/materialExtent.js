const { context } = require('../base')

module.exports = function (API) {
  class MaterialExtent extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MaterialExtent] })
}