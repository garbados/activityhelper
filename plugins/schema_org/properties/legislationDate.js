const { context } = require('../base')

module.exports = function (API) {
  class LegislationDate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LegislationDate] })
}