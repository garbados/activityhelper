const { context } = require('../base')

module.exports = function (API) {
  class TotalJobOpenings extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TotalJobOpenings] })
}