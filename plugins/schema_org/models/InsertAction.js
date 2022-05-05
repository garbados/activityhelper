const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class InsertAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [InsertAction] })
}