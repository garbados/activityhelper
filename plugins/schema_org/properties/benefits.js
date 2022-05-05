const { context } = require('../base')

module.exports = function (API) {
  class Benefits extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Benefits] })
}