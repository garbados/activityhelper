const { context } = require('../base')

module.exports = function (API) {
  class AlternativeHeadline extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AlternativeHeadline] })
}