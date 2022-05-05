const { context } = require('../base')

module.exports = function (API) {
  class Athlete extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Athlete] })
}