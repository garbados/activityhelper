const { context } = require('../base')

module.exports = function (API) {
  class HasHealthAspect extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HasHealthAspect] })
}