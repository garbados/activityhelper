const { context } = require('../base')

module.exports = function (API) {
  class PartOfTVSeries extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PartOfTVSeries] })
}