const { context } = require('../base')

module.exports = function (API) {
  class RunsTo extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RunsTo] })
}