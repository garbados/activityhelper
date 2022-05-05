const { context } = require('../base')

module.exports = function (API) {
  class InChI extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [InChI] })
}