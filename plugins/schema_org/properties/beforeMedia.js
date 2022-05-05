const { context } = require('../base')

module.exports = function (API) {
  class BeforeMedia extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BeforeMedia] })
}