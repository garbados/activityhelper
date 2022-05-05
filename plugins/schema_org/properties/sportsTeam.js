const { context } = require('../base')

module.exports = function (API) {
  class SportsTeam extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SportsTeam] })
}