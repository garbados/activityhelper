const { context } = require('../base')

module.exports = function (API) {
  class SportsActivityLocation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SportsActivityLocation] })
}