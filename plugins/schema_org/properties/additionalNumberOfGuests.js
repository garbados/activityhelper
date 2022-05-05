const { context } = require('../base')

module.exports = function (API) {
  class AdditionalNumberOfGuests extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AdditionalNumberOfGuests] })
}