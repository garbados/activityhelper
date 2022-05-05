const { context } = require('../base')

module.exports = function (API) {
  class Telephone extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Telephone] })
}