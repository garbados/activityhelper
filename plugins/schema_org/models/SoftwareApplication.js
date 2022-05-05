const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SoftwareApplication extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SoftwareApplication] })
}