const { context } = require('../base')

module.exports = function (API) {
  class ClipNumber extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ClipNumber] })
}