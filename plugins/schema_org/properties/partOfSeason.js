const { context } = require('../base')

module.exports = function (API) {
  class PartOfSeason extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PartOfSeason] })
}