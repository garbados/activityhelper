const { context } = require('../base')

module.exports = function (API) {
  class CheatCode extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CheatCode] })
}