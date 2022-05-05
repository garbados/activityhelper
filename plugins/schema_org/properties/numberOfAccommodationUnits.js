const { context } = require('../base')

module.exports = function (API) {
  class NumberOfAccommodationUnits extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NumberOfAccommodationUnits] })
}