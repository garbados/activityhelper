const { context } = require('../base')

module.exports = function (API) {
  class AfterMedia extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AfterMedia] })
}