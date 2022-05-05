const { context } = require('../base')

module.exports = function (API) {
  class ServingSize extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ServingSize] })
}