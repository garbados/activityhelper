const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class NotYetRecruiting extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [NotYetRecruiting] })
}