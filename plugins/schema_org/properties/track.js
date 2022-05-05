const { context } = require('../base')

module.exports = function (API) {
  class Track extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Track] })
}