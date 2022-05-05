const { context } = require('../base')

module.exports = function (API) {
  class Winner extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Winner] })
}