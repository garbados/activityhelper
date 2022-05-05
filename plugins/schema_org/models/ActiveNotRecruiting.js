const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ActiveNotRecruiting extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ActiveNotRecruiting] })
}