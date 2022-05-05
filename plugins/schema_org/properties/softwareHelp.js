const { context } = require('../base')

module.exports = function (API) {
  class SoftwareHelp extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SoftwareHelp] })
}