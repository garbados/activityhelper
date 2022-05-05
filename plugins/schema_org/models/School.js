const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class School extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [School] })
}