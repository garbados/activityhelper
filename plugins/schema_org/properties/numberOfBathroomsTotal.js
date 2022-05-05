const { context } = require('../base')

module.exports = function (API) {
  class NumberOfBathroomsTotal extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NumberOfBathroomsTotal] })
}