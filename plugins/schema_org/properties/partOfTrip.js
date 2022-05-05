const { context } = require('../base')

module.exports = function (API) {
  class PartOfTrip extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PartOfTrip] })
}