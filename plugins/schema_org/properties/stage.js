const { context } = require('../base')

module.exports = function (API) {
  class Stage extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Stage] })
}