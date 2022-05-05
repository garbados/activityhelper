const { context } = require('../base')

module.exports = function (API) {
  class Workload extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Workload] })
}