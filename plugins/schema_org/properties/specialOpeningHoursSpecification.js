const { context } = require('../base')

module.exports = function (API) {
  class SpecialOpeningHoursSpecification extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SpecialOpeningHoursSpecification] })
}