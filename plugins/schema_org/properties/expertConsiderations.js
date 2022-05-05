const { context } = require('../base')

module.exports = function (API) {
  class ExpertConsiderations extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ExpertConsiderations] })
}