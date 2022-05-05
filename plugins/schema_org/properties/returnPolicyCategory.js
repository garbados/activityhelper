const { context } = require('../base')

module.exports = function (API) {
  class ReturnPolicyCategory extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ReturnPolicyCategory] })
}