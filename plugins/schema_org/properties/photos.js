const { context } = require('../base')

module.exports = function (API) {
  class Photos extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Photos] })
}