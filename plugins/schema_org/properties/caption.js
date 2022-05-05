const { context } = require('../base')

module.exports = function (API) {
  class Caption extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Caption] })
}