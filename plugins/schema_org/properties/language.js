const { context } = require('../base')

module.exports = function (API) {
  class Language extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Language] })
}