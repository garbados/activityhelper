const { context } = require('../base')

module.exports = function (API) {
  class NumberedPosition extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NumberedPosition] })
}