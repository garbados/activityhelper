const { context } = require('../base')

module.exports = function (API) {
  class Wheelbase extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Wheelbase] })
}