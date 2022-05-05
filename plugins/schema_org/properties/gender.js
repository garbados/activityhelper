const { context } = require('../base')

module.exports = function (API) {
  class Gender extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Gender] })
}