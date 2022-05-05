const { context } = require('../base')

module.exports = function (API) {
  class AccommodationFloorPlan extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AccommodationFloorPlan] })
}