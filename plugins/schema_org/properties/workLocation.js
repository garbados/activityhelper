const { context } = require('../base')

module.exports = function (API) {
  class WorkLocation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [WorkLocation] })
}