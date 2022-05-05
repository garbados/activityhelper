const { context } = require('../base')

module.exports = function (API) {
  class Directors extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Directors] })
}