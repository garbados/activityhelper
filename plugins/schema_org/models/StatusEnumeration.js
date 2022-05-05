const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class StatusEnumeration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [StatusEnumeration] })
}