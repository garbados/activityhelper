const { context } = require('../base')

module.exports = function (API) {
  class AssociatedMedia extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AssociatedMedia] })
}