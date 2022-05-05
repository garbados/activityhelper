const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ImagingTest extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ImagingTest] })
}