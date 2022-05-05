const { context } = require('../base')

module.exports = function (API) {
  class Industry extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Industry] })
}