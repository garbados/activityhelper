const { context } = require('../base')

module.exports = function (API) {
  class NumberOfBeds extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NumberOfBeds] })
}