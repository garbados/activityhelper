const { context } = require('../base')

module.exports = function (API) {
  class FiberContent extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [FiberContent] })
}