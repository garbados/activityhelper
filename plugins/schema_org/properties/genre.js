const { context } = require('../base')

module.exports = function (API) {
  class Genre extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Genre] })
}