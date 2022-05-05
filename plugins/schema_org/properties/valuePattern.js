const { context } = require('../base')

module.exports = function (API) {
  class ValuePattern extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ValuePattern] })
}