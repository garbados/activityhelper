const { context } = require('../base')

module.exports = function (API) {
  class CauseOf extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CauseOf] })
}