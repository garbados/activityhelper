const { context } = require('../base')

module.exports = function (API) {
  class ContentReferenceTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ContentReferenceTime] })
}