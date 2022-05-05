const { context } = require('../base')

module.exports = function (API) {
  class PartOfSeries extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PartOfSeries] })
}