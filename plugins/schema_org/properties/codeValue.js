const { context } = require('../base')

module.exports = function (API) {
  class CodeValue extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CodeValue] })
}