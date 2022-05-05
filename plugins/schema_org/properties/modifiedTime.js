const { context } = require('../base')

module.exports = function (API) {
  class ModifiedTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ModifiedTime] })
}