const { context } = require('../base')

module.exports = function (API) {
  class IsProprietary extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IsProprietary] })
}