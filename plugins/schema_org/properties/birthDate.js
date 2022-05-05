const { context } = require('../base')

module.exports = function (API) {
  class BirthDate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BirthDate] })
}