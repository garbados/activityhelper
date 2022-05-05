const { context } = require('../base')

module.exports = function (API) {
  class Text extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Text] })
}