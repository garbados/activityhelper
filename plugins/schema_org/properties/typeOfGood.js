const { context } = require('../base')

module.exports = function (API) {
  class TypeOfGood extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TypeOfGood] })
}