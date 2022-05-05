const { context } = require('../base')

module.exports = function (API) {
  class WorksFor extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [WorksFor] })
}