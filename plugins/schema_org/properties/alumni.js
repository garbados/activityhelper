const { context } = require('../base')

module.exports = function (API) {
  class Alumni extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Alumni] })
}