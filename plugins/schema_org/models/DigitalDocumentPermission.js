const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DigitalDocumentPermission extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DigitalDocumentPermission] })
}