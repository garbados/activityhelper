const { context } = require('../base')

module.exports = function (API) {
  class CodingSystem extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CodingSystem] })
}