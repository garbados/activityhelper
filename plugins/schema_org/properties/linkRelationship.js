const { context } = require('../base')

module.exports = function (API) {
  class LinkRelationship extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LinkRelationship] })
}