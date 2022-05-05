const { context } = require('../base')

module.exports = function (API) {
  class NumberOfBedrooms extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NumberOfBedrooms] })
}