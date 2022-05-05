const { context } = require('../base')

module.exports = function (API) {
  class ConstrainingProperty extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ConstrainingProperty] })
}