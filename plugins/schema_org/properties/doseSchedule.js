const { context } = require('../base')

module.exports = function (API) {
  class DoseSchedule extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DoseSchedule] })
}