const { context } = require('../base')

module.exports = function (API) {
  class IsPlanForApartment extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IsPlanForApartment] })
}