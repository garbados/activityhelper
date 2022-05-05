const { context } = require('../base')

module.exports = function (API) {
  class TouristType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TouristType] })
}