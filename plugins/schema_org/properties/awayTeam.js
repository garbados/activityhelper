const { context } = require('../base')

module.exports = function (API) {
  class AwayTeam extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AwayTeam] })
}