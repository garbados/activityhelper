const { context } = require('../base')

module.exports = function (API) {
  class RecourseLoan extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RecourseLoan] })
}