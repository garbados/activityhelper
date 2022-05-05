const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DigitalDocument extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DigitalDocument] })
}