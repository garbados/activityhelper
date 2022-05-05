const { context } = require('../base')

module.exports = function (API) {
  class Longitude extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Longitude] })
}