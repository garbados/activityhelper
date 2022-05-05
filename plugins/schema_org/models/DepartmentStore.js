const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DepartmentStore extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DepartmentStore] })
}