const { context } = require('../base')

module.exports = function (API) {
  class Actor extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Actor] })
}