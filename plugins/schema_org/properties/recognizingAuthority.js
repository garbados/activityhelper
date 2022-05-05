const { context } = require('../base')

module.exports = function (API) {
  class RecognizingAuthority extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RecognizingAuthority] })
}