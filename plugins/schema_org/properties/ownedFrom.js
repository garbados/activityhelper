const { context } = require('../base')

module.exports = function (API) {
  class OwnedFrom extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [OwnedFrom] })
}