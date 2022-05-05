const { context } = require('../base')

module.exports = function (API) {
  class WorkHours extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [WorkHours] })
}