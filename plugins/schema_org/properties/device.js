const { context } = require('../base')

module.exports = function (API) {
  class Device extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Device] })
}