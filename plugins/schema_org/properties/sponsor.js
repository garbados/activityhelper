const { context } = require('../base')

module.exports = function (API) {
  class Sponsor extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Sponsor] })
}