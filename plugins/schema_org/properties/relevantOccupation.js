const { context } = require('../base')

module.exports = function (API) {
  class RelevantOccupation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RelevantOccupation] })
}