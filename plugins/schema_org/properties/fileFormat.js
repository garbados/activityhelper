const { context } = require('../base')

module.exports = function (API) {
  class FileFormat extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [FileFormat] })
}