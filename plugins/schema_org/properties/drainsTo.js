const { context } = require('../base')

module.exports = function (API) {
  class DrainsTo extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DrainsTo] })
}