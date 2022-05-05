const { context } = require('../base')

module.exports = function (API) {
  class Albums extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Albums] })
}