const { context } = require('../base')

module.exports = function (API) {
  class Album extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Album] })
}