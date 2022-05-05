const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LinkRole extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LinkRole] })
}