const { context } = require('../base')

module.exports = function (API) {
  class LocationCreated extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LocationCreated] })
}