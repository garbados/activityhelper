const { context } = require('../base')

module.exports = function (API) {
  class SoftwareRequirements extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SoftwareRequirements] })
}