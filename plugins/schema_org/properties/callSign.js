const { context } = require('../base')

module.exports = function (API) {
  class CallSign extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CallSign] })
}