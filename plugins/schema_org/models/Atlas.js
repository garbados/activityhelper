const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Atlas extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Atlas] })
}