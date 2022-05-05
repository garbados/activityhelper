const { context } = require('../base')

module.exports = function (API) {
  class IsicV4 extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IsicV4] })
}