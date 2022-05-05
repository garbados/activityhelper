const { context } = require('../base')

module.exports = function (API) {
  class Penciler extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Penciler] })
}