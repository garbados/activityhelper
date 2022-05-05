const { context } = require('../base')

module.exports = function (API) {
  class AccommodationCategory extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AccommodationCategory] })
}