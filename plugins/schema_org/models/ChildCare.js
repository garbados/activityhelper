const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ChildCare extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ChildCare] })
}