const { context } = require('../base')

module.exports = function (API) {
  class PotentialAction extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PotentialAction] })
}