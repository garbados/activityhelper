const { context } = require('../base')

module.exports = function (API) {
  class Creator extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Creator] })
}