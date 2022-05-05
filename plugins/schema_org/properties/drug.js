const { context } = require('../base')

module.exports = function (API) {
  class Drug extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Drug] })
}