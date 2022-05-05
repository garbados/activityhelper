const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Patient extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Patient] })
}