const { context } = require('../base')

module.exports = function (API) {
  class Status extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Status] })
}