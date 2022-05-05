const { context } = require('../base')

module.exports = function (API) {
  class PregnancyWarning extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PregnancyWarning] })
}