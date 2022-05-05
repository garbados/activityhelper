const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DigitalDocumentPermissionType extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DigitalDocumentPermissionType] })
}