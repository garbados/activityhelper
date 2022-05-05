const { context } = require('../base')

module.exports = function (API) {
  class AlcoholWarning extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AlcoholWarning] })
}