const { context } = require('../base')

module.exports = function (API) {
  class BodyType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BodyType] })
}