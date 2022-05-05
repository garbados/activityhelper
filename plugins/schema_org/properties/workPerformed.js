const { context } = require('../base')

module.exports = function (API) {
  class WorkPerformed extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [WorkPerformed] })
}