const { context } = require('../base')

module.exports = function (API) {
  class Nationality extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Nationality] })
}