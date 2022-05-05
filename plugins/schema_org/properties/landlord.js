const { context } = require('../base')

module.exports = function (API) {
  class Landlord extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Landlord] })
}