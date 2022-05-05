const { context } = require('../base')

module.exports = function (API) {
  class Study extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Study] })
}