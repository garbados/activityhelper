const { context } = require('../base')

module.exports = function (API) {
  class Diet extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Diet] })
}