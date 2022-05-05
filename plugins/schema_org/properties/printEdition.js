const { context } = require('../base')

module.exports = function (API) {
  class PrintEdition extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PrintEdition] })
}