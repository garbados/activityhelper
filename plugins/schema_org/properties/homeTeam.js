const { context } = require('../base')

module.exports = function (API) {
  class HomeTeam extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HomeTeam] })
}