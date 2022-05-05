const { context } = require('../base')

module.exports = function (API) {
  class PartOfSystem extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PartOfSystem] })
}