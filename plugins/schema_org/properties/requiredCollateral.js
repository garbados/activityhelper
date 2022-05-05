const { context } = require('../base')

module.exports = function (API) {
  class RequiredCollateral extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RequiredCollateral] })
}