const { context } = require('../base')

module.exports = function (API) {
  class HasDigitalDocumentPermission extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HasDigitalDocumentPermission] })
}