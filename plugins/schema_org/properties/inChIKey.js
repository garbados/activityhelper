const { context } = require('../base')

module.exports = function (API) {
  class InChIKey extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [InChIKey] })
}