const { context } = require('../base')

module.exports = function (API) {
  class StorageRequirements extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [StorageRequirements] })
}