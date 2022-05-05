const { context } = require('../base')

module.exports = function (API) {
  class ModelDate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ModelDate] })
}