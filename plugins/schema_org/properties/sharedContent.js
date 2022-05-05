const { context } = require('../base')

module.exports = function (API) {
  class SharedContent extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SharedContent] })
}