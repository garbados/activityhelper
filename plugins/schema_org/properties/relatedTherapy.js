const { context } = require('../base')

module.exports = function (API) {
  class RelatedTherapy extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RelatedTherapy] })
}