const { context } = require('../base')

module.exports = function (API) {
  class Assembly extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Assembly] })
}