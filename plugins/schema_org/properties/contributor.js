const { context } = require('../base')

module.exports = function (API) {
  class Contributor extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Contributor] })
}