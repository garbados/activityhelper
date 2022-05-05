const { context } = require('../base')

module.exports = function (API) {
  class TypicalAgeRange extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TypicalAgeRange] })
}