const { context } = require('../base')

module.exports = function (API) {
  class MeetsEmissionStandard extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MeetsEmissionStandard] })
}