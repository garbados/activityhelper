const { context } = require('../base')

module.exports = function (API) {
  class SalaryCurrency extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SalaryCurrency] })
}