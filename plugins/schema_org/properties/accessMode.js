const { context } = require('../base')

module.exports = function (API) {
  class AccessMode extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AccessMode] })
}