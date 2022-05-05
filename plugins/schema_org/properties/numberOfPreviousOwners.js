const { context } = require('../base')

module.exports = function (API) {
  class NumberOfPreviousOwners extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NumberOfPreviousOwners] })
}