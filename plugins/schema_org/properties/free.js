const { context } = require('../base')

module.exports = function (API) {
  class Free extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Free] })
}