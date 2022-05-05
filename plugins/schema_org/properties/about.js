const { context } = require('../base')

module.exports = function (API) {
  class About extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [About] })
}