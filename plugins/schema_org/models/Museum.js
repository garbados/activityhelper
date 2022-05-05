const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Museum extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Museum] })
}