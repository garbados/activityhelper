const { context } = require('../base')

module.exports = function (API) {
  class FunctionalClass extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [FunctionalClass] })
}