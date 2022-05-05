const { context } = require('../base')

module.exports = function (API) {
  class EvidenceOrigin extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EvidenceOrigin] })
}