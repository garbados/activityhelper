const { context } = require('../base')

module.exports = function (API) {
  class DeathDate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DeathDate] })
}