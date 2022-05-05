const { context } = require('../base')

module.exports = function (API) {
  class AlternateName extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AlternateName] })
}