const { context } = require('../base')

module.exports = function (API) {
  class Documentation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Documentation] })
}