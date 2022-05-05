const { context } = require('../base')

module.exports = function (API) {
  class Insertion extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Insertion] })
}