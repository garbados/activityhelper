const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PresentationDigitalDocument extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PresentationDigitalDocument] })
}