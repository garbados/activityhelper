const { context } = require('../base')

module.exports = function (API) {
  class Author extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Author] })
}