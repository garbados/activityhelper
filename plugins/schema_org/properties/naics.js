const { context } = require('../base')

module.exports = function (API) {
  class Naics extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Naics] })
}