const { context } = require('../base')

module.exports = function (API) {
  class EvidenceLevel extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EvidenceLevel] })
}