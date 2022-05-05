const { context } = require('../base')

module.exports = function (API) {
  class Members extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Members] })
}