const { context } = require('../base')

module.exports = function (API) {
  class FileSize extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [FileSize] })
}