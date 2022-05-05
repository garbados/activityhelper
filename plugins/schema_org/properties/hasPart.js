const { context } = require('../base')

module.exports = function (API) {
  class HasPart extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HasPart] })
}