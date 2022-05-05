const { context } = require('../base')

module.exports = function (API) {
  class RelatedAnatomy extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RelatedAnatomy] })
}