const { context } = require('../base')

module.exports = function (API) {
  class LesserOrEqual extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LesserOrEqual] })
}