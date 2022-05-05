const { context } = require('../base')

module.exports = function (API) {
  class BookEdition extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BookEdition] })
}