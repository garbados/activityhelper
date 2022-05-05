const { context } = require('../base')

module.exports = function (API) {
  class Aircraft extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Aircraft] })
}