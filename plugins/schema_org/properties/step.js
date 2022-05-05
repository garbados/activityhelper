const { context } = require('../base')

module.exports = function (API) {
  class Step extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Step] })
}