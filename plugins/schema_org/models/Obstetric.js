const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Obstetric extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Obstetric] })
}