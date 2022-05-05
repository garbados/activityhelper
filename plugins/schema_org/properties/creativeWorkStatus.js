const { context } = require('../base')

module.exports = function (API) {
  class CreativeWorkStatus extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CreativeWorkStatus] })
}