const { context } = require('../base')

module.exports = function (API) {
  class PositiveNotes extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PositiveNotes] })
}