const { context } = require('../base')

module.exports = function (API) {
  class DuringMedia extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DuringMedia] })
}