const { context } = require('../base')

module.exports = function (API) {
  class GettingTestedInfo extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [GettingTestedInfo] })
}