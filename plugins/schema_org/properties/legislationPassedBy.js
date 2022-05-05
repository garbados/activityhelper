const { context } = require('../base')

module.exports = function (API) {
  class LegislationPassedBy extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LegislationPassedBy] })
}