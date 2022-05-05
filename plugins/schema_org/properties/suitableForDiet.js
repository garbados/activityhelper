const { context } = require('../base')

module.exports = function (API) {
  class SuitableForDiet extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SuitableForDiet] })
}