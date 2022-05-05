const { context } = require('../base')

module.exports = function (API) {
  class Nsn extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Nsn] })
}