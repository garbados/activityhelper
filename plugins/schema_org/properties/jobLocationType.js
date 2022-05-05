const { context } = require('../base')

module.exports = function (API) {
  class JobLocationType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [JobLocationType] })
}