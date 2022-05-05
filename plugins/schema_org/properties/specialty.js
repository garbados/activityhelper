const { context } = require('../base')

module.exports = function (API) {
  class Specialty extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Specialty] })
}