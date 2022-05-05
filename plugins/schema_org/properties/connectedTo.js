const { context } = require('../base')

module.exports = function (API) {
  class ConnectedTo extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ConnectedTo] })
}