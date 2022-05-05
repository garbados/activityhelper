const { context } = require('../base')

module.exports = function (API) {
  class EncodesCreativeWork extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EncodesCreativeWork] })
}