const { context } = require('../base')

module.exports = function (API) {
  class SugarContent extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SugarContent] })
}