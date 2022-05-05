const { context } = require('../base')

module.exports = function (API) {
  class StructuralClass extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [StructuralClass] })
}