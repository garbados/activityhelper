const { context } = require('../base')

module.exports = function (API) {
  class PhysicalRequirement extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PhysicalRequirement] })
}