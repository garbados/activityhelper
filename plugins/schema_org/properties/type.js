const { context } = require('../base')

module.exports = function (API) {
  class Type extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Type] })
}