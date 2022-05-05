const { context } = require('../base')

module.exports = function (API) {
  class NumberOfSeasons extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NumberOfSeasons] })
}