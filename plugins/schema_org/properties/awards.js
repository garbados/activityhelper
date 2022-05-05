const { context } = require('../base')

module.exports = function (API) {
  class Awards extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Awards] })
}