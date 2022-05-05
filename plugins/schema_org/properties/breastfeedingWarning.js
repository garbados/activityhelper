const { context } = require('../base')

module.exports = function (API) {
  class BreastfeedingWarning extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BreastfeedingWarning] })
}