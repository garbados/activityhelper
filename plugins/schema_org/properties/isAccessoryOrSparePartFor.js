const { context } = require('../base')

module.exports = function (API) {
  class IsAccessoryOrSparePartFor extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IsAccessoryOrSparePartFor] })
}