const { context } = require('../base')

module.exports = function (API) {
  class NegativeNotes extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NegativeNotes] })
}