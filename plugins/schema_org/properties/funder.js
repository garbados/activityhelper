const { context } = require('../base')

module.exports = function (API) {
  class Funder extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Funder] })
}