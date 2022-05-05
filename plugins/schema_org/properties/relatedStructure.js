const { context } = require('../base')

module.exports = function (API) {
  class RelatedStructure extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RelatedStructure] })
}