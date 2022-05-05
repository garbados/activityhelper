const { context } = require('../base')

module.exports = function (API) {
  class ProteinContent extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ProteinContent] })
}