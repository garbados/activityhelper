const { context } = require('../base')

module.exports = function (API) {
  class Aspect extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Aspect] })
}