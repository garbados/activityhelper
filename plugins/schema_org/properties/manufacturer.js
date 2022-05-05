const { context } = require('../base')

module.exports = function (API) {
  class Manufacturer extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Manufacturer] })
}