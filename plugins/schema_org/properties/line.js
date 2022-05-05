const { context } = require('../base')

module.exports = function (API) {
  class Line extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Line] })
}