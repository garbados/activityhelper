const { context } = require('../base')

module.exports = function (API) {
  class Duration extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Duration] })
}