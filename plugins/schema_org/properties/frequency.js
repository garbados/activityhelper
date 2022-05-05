const { context } = require('../base')

module.exports = function (API) {
  class Frequency extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Frequency] })
}