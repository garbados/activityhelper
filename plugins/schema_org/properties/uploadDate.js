const { context } = require('../base')

module.exports = function (API) {
  class UploadDate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [UploadDate] })
}