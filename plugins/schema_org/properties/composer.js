const { context } = require('../base')

module.exports = function (API) {
  class Composer extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Composer] })
}